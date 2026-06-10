import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';

const KEY_FILE = path.join(process.cwd(), 'google-indexing-key.json');
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const SITE_URL = 'https://dayboi.vip/';

async function main() {
  const args = process.argv.slice(2);
  const mode = args[0];

  if (mode !== 'generate' && mode !== 'verify') {
    console.log('Cách sử dụng:');
    console.log('  node scripts/google-site-verification.js generate  -> Để lấy token và tạo file verification');
    console.log('  node scripts/google-site-verification.js verify    -> Để gửi xác minh tới Google sau khi đã deploy');
    process.exit(1);
  }

  // 1. Kiểm tra sự tồn tại của file key credentials
  if (!fs.existsSync(KEY_FILE)) {
    console.error(`\x1b[31m[Google Verification] LỖI: Không tìm thấy file cấu hình key tại: ${KEY_FILE}\x1b[0m`);
    process.exit(1);
  }

  // 2. Khởi tạo xác thực Google API
  let authClient;
  try {
    authClient = new google.auth.GoogleAuth({
      keyFile: KEY_FILE,
      scopes: ['https://www.googleapis.com/auth/siteverification']
    });
  } catch (err) {
    console.error('\x1b[31m[Google Verification] LỖI: Xác thực tài khoản dịch vụ thất bại.\x1b[0m', err.message);
    process.exit(1);
  }

  const siteVerification = google.siteVerification({
    version: 'v1',
    auth: authClient
  });

  if (mode === 'generate') {
    console.log(`[Google Verification] Đang yêu cầu mã xác minh cho trang: ${SITE_URL}...`);
    try {
      const response = await siteVerification.webResource.getToken({
        requestBody: {
          verificationMethod: 'FILE',
          site: {
            identifier: SITE_URL,
            type: 'SITE'
          }
        }
      });

      const tokenContent = response.data.token;
      console.log('[Google Verification] Đã nhận được token từ Google API:', tokenContent);

      // Tìm tên file và nội dung file từ token
      let filename = '';
      let fileContent = '';
      if (tokenContent.includes('google-site-verification:')) {
        filename = tokenContent.replace('google-site-verification:', '').trim();
        fileContent = tokenContent;
      } else if (tokenContent.startsWith('google') && tokenContent.endsWith('.html')) {
        filename = tokenContent.trim();
        fileContent = `google-site-verification: ${filename}`;
      } else {
        filename = 'google-verification.html';
        fileContent = tokenContent;
      }

      const filePath = path.join(PUBLIC_DIR, filename);

      // Tạo thư mục public nếu chưa có
      if (!fs.existsSync(PUBLIC_DIR)) {
        fs.mkdirSync(PUBLIC_DIR, { recursive: true });
      }

      // Ghi nội dung vào file
      fs.writeFileSync(filePath, fileContent, 'utf-8');
      console.log(`\x1b[32m[Google Verification] THÀNH CÔNG: Đã tạo file xác minh tại: ${filePath}\x1b[0m`);
      console.log(`[Google Verification] Nội dung file: "${fileContent}"`);
      console.log('\n\x1b[36m--- CÁC BƯỚC TIẾP THEO ---\x1b[0m');
      console.log('1. Commit và push file mới lên GitHub.');
      console.log('2. Đợi Netlify deploy hoàn tất phiên bản mới.');
      console.log(`3. Kiểm tra xem file đã hiển thị tại: ${SITE_URL}${filename} chưa.`);
      console.log('4. Chạy lệnh tiếp theo để hoàn thành xác minh:');
      console.log('   \x1b[33mnode scripts/google-site-verification.js verify\x1b[0m');
    } catch (err) {
      console.error('\x1b[31m[Google Verification] LỖI khi tạo token:\x1b[0m', err.message);
      if (err.message.includes('API has not been used')) {
        console.warn('\x1b[33mHãy chắc chắn bạn đã BẬT "Site Verification API" trong Google Cloud Console cho Project của bạn.\x1b[0m');
      }
      process.exit(1);
    }
  }

  if (mode === 'verify') {
    console.log(`[Google Verification] Đang yêu cầu Google xác minh quyền sở hữu cho trang: ${SITE_URL}...`);
    try {
      const response = await siteVerification.webResource.insert({
        verificationMethod: 'FILE',
        requestBody: {
          site: {
            identifier: SITE_URL,
            type: 'SITE'
          }
        }
      });

      console.log('\x1b[32m[Google Verification] ĐÃ XÁC MINH THÀNH CÔNG!\x1b[0m');
      console.log('Thông tin tài nguyên:', response.data);
      console.log('\x1b[32m[Google Verification] Tài khoản dịch vụ của bạn giờ đây đã là OWNER hợp lệ của trang web trong Google Search Console.\x1b[0m');
    } catch (err) {
      console.error('\x1b[31m[Google Verification] LỖI khi thực hiện xác minh:\x1b[0m', err.message);
      console.error('[Google Verification] Vui lòng kiểm tra lại xem file HTML xác minh đã hiển thị trực tiếp trên website của bạn chưa.');
      process.exit(1);
    }
  }
}

main().catch(err => {
  console.error('[Google Verification] Lỗi không mong đợi:', err);
  process.exit(1);
});
