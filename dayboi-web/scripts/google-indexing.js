import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';

const KEY_FILE = path.join(process.cwd(), 'google-indexing-key.json');
const CACHE_FILE = path.join(process.cwd(), '.google-indexing-cache.json');
const SITEMAP_FILE = path.join(process.cwd(), 'dist', 'sitemap-0.xml');
const SITE_URL = 'https://dayboi.vip/';
const SITEMAP_URL = 'https://dayboi.vip/sitemap-index.xml';
const MAX_URLS_PER_RUN = 100; // Limit to stay safely within the default 200/day Indexing API quota

async function main() {
  console.log('[Google Indexing] Bắt đầu quy trình kiểm tra index...');

  // 1. Kiểm tra sự tồn tại của file key credentials
  if (!fs.existsSync(KEY_FILE)) {
    console.warn(`\x1b[33m[Google Indexing] KHÔNG tìm thấy file cấu hình key tại: ${KEY_FILE}\x1b[0m`);
    console.warn('\x1b[33m[Google Indexing] Bỏ qua bước lập chỉ mục Google. Vui lòng thêm file key để kích hoạt.\x1b[0m');
    process.exit(0);
  }

  // 2. Kiểm tra sự tồn tại của file sitemap
  if (!fs.existsSync(SITEMAP_FILE)) {
    console.error(`\x1b[31m[Google Indexing] LỖI: Không tìm thấy file sitemap tại: ${SITEMAP_FILE}\x1b[0m`);
    console.error('[Google Indexing] Hãy đảm bảo bạn đã chạy build dự án trước (`npm run build`).');
    process.exit(1);
  }

  // 3. Đọc sitemap và trích xuất URLs + lastmod
  console.log(`[Google Indexing] Đang đọc sitemap từ ${SITEMAP_FILE}...`);
  const sitemapContent = fs.readFileSync(SITEMAP_FILE, 'utf-8');
  
  // Trích xuất các block <url>...</url>
  const urlBlocks = sitemapContent.match(/<url>([\s\S]*?)<\/url>/g) || [];
  const currentUrls = {};
  
  for (const block of urlBlocks) {
    const locMatch = block.match(/<loc>(.*?)<\/loc>/);
    const lastmodMatch = block.match(/<lastmod>(.*?)<\/lastmod>/);
    
    if (locMatch) {
      const url = locMatch[1].trim();
      // Nếu không có lastmod, sử dụng thời gian hiện tại
      const lastmod = lastmodMatch ? lastmodMatch[1].trim() : new Date().toISOString();
      currentUrls[url] = lastmod;
    }
  }

  const totalUrlsInSitemap = Object.keys(currentUrls).length;
  console.log(`[Google Indexing] Tìm thấy ${totalUrlsInSitemap} URLs trong sitemap.`);

  if (totalUrlsInSitemap === 0) {
    console.log('[Google Indexing] Không tìm thấy URL nào trong sitemap để xử lý.');
    process.exit(0);
  }

  // 4. Đọc file cache để so sánh thay đổi
  let cache = { submittedUrls: {} };
  let isFirstRun = false;

  if (fs.existsSync(CACHE_FILE)) {
    try {
      cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8'));
      if (!cache.submittedUrls) cache.submittedUrls = {};
    } catch (e) {
      console.warn('\x1b[33m[Google Indexing] Cảnh báo: File cache bị lỗi định dạng. Khởi tạo lại cache mới.\x1b[0m');
      isFirstRun = true;
    }
  } else {
    isFirstRun = true;
  }

  // Chế độ chạy bắt buộc gửi (force) qua tham số truyền vào: node google-indexing.js --force
  const isForce = process.argv.includes('--force');

  // Xác định các URL cần gửi
  const urlsToSubmit = [];
  
  if (isFirstRun && !isForce) {
    console.log(`\x1b[36m[Google Indexing] Phát hiện chạy lần đầu tiên. Tạo file cache cho ${totalUrlsInSitemap} URLs hiện tại.\x1b[0m`);
    console.log('\x1b[36m[Google Indexing] Sẽ không gửi URL nào lên Google Indexing API ở lần này để tránh vượt giới hạn quota (200/ngày).\x1b[0m');
    console.log('\x1b[36m[Google Indexing] (Nếu muốn gửi ngay lập tức, hãy chạy lại lệnh: node scripts/google-indexing.js --force)\x1b[0m');
    
    // Ghi toàn bộ URL vào cache
    cache.submittedUrls = { ...currentUrls };
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), 'utf-8');
  } else {
    for (const [url, lastmod] of Object.entries(currentUrls)) {
      const cachedLastmod = cache.submittedUrls[url];
      
      // Nếu chưa từng gửi (không có trong cache), hoặc lastmod đã thay đổi, hoặc chạy ở chế độ force
      if (!cachedLastmod || cachedLastmod !== lastmod || isForce) {
        urlsToSubmit.push(url);
      }
    }
  }

  // 5. Khởi tạo xác thực Google API
  let authClient;
  try {
    authClient = new google.auth.GoogleAuth({
      keyFile: KEY_FILE,
      scopes: [
        'https://www.googleapis.com/auth/indexing',
        'https://www.googleapis.com/auth/webmasters'
      ]
    });
  } catch (err) {
    console.error('\x1b[31m[Google Indexing] LỖI: Xác thực tài khoản dịch vụ thất bại.\x1b[0m', err.message);
    process.exit(1);
  }

  // 6. Xử lý gửi URL lên Google Indexing API
  if (urlsToSubmit.length > 0) {
    console.log(`[Google Indexing] Phát hiện có ${urlsToSubmit.length} URLs mới hoặc đã thay đổi.`);
    
    // Giới hạn số lượng gửi mỗi lần để an toàn cho quota
    const urlsToProcess = urlsToSubmit.slice(0, MAX_URLS_PER_RUN);
    const remainingUrls = urlsToSubmit.slice(MAX_URLS_PER_RUN);
    
    if (remainingUrls.length > 0) {
      console.warn(`\x1b[33m[Google Indexing] Cảnh báo: Số lượng URL cần gửi (${urlsToSubmit.length}) vượt quá giới hạn mỗi lần chạy (${MAX_URLS_PER_RUN}).\x1b[0m`);
      console.warn(`\x1b[33m[Google Indexing] Chỉ gửi ${MAX_URLS_PER_RUN} URLs đầu tiên. ${remainingUrls.length} URLs còn lại sẽ được gửi ở các lần build tiếp theo.\x1b[0m`);
    }

    const indexing = google.indexing({ version: 'v3', auth: authClient });
    
    console.log('[Google Indexing] Đang gửi yêu cầu lập chỉ mục tới Google Indexing API...');
    
    for (let i = 0; i < urlsToProcess.length; i++) {
      const url = urlsToProcess[i];
      try {
        console.log(`[Google Indexing] [${i + 1}/${urlsToProcess.length}] Gửi URL: ${url}`);
        const response = await indexing.urlNotifications.publish({
          requestBody: {
            url: url,
            type: 'URL_UPDATED'
          }
        });
        
        if (response.status === 200) {
          // Lưu trạng thái gửi thành công vào cache
          cache.submittedUrls[url] = currentUrls[url];
        } else {
          console.warn(`\x1b[33m[Google Indexing] Gửi URL ${url} thất bại với status code: ${response.status}\x1b[0m`);
        }
      } catch (err) {
        console.error(`\x1b[31m[Google Indexing] Lỗi khi gửi URL ${url}:\x1b[0m`, err.message);
      }
    }
    
    // Ghi lại cache sau khi gửi
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), 'utf-8');
    console.log('[Google Indexing] Đã cập nhật file cache thành công.');
  } else {
    if (!isFirstRun) {
      console.log('\x1b[32m[Google Indexing] Không phát hiện URL nào mới hoặc thay đổi kể từ lần build trước.\x1b[0m');
    }
  }

  // 7. Gửi sitemap tới Google Search Console API
  console.log(`[Google Indexing] Đang ping sitemap tới Google Search Console cho thuộc tính: ${SITE_URL}...`);
  try {
    const webmasters = google.webmasters({ version: 'v3', auth: authClient });
    const response = await webmasters.sitemaps.submit({
      siteUrl: SITE_URL,
      feedpath: SITEMAP_URL
    });
    
    if (response.status === 204 || response.status === 200) {
      console.log(`\x1b[32m[Google Indexing] Thành công gửi sitemap ${SITEMAP_URL} tới Google Search Console!\x1b[0m`);
    } else {
      console.warn(`\x1b[33m[Google Indexing] Phản hồi gửi sitemap có status code không mong muốn: ${response.status}\x1b[0m`);
    }
  } catch (err) {
    console.error('\x1b[31m[Google Indexing] Lỗi khi ping sitemap tới Google Search Console:\x1b[0m', err.message);
    console.error('[Google Indexing] Hãy đảm bảo tài khoản dịch vụ đã được thêm làm OWNER trong Search Console của website.');
  }

  console.log('[Google Indexing] Hoàn thành quy trình.');
}

main().catch(err => {
  console.error('[Google Indexing] Đã xảy ra lỗi nghiêm trọng trong quy trình:', err);
  process.exit(1);
});
