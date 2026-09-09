import { defineMiddleware } from 'astro:middleware';

const DIRECTORY_URL = '/hoc-boi-o-dau/';

const sanitizeLegacyRetailContact = (html: string, isEnglish: boolean) => {
  const directoryLabel = isEnglish ? 'Open local directory' : 'Mở danh bạ địa phương';
  const enterpriseLabel = isEnglish ? 'Organization enquiry' : 'Yêu cầu hợp tác';
  let output = html
    .replace(
      /<a\b([^>]*?)href=(["'])(?:tel:[^"']+|https?:\/\/zalo\.me\/[^"']+)\2([^>]*)>[\s\S]*?<\/a>/gi,
      `<a$1href="${DIRECTORY_URL}"$3>${directoryLabel}</a>`,
    )
    .replace(
      /<a\b([^>]*?)href=(["'])mailto:dayboivip@gmail\.com\2([^>]*)>[\s\S]*?<\/a>/gi,
      `<a$1href="${isEnglish ? '/en/contact/' : '/lien-he/'}"$3>${enterpriseLabel}</a>`,
    );

  const directLinkReplacements: Array<[string, string]> = [
    ['https://zalo.me/0979121097', DIRECTORY_URL],
    ['http://zalo.me/0979121097', DIRECTORY_URL],
    ['tel:+84979121097', DIRECTORY_URL],
    ['tel:0979121097', DIRECTORY_URL],
    ['mailto:dayboivip@gmail.com', '/lien-he/'],
  ];

  output = directLinkReplacements.reduce(
    (result, [legacyValue, replacement]) => result.replaceAll(legacyValue, replacement),
    html,
  );

  output = output
    .replaceAll('+84979121097', '')
    .replaceAll('0979.121.097', '')
    .replaceAll('0979121097', '')
    .replaceAll('dayboivip@gmail.com', '')
    .replaceAll('ĐĂNG KÝ HỌC THỬ MIỄN PHÍ', 'MỞ DANH BẠ ĐỊA PHƯƠNG')
    .replaceAll('Đăng Ký Học Thử Miễn Phí', 'Mở Danh Bạ Địa Phương')
    .replaceAll('Đăng Ký Học Thử', 'Mở Danh Bạ Địa Phương')
    .replaceAll('Đặt Lịch Học Thử Miễn Phí', 'Mở Danh Bạ Địa Phương')
    .replaceAll('Đăng ký học thử miễn phí', 'Mở danh bạ địa phương')
    .replaceAll('Book Free Trial Session', 'Open Local Directory')
    .replaceAll('Book Free Trial', 'Open Local Directory')
    .replaceAll('Register Free Trial', 'Open Local Directory')
    .replaceAll('Get a Free Consultation', 'Open Local Directory')
    .replaceAll('Đăng Ký Ngay', 'Xem Danh Bạ Địa Phương')
    .replaceAll('Chat Zalo Ngay', 'Xem Danh Bạ Địa Phương')
    .replaceAll('Gọi Hotline', 'Xem Danh Bạ')
    .replaceAll('Hotline / Zalo tư vấn', 'Danh bạ địa phương')
    .replaceAll('Hotline tư vấn', 'Danh bạ địa phương')
    .replaceAll('Trò chuyện qua Zalo', 'Tra cứu đơn vị địa phương')
    .replaceAll('Trò chuyện Zalo', 'Tra cứu đơn vị địa phương');

  output = isEnglish
    ? output
        .replaceAll('Zalo/WhatsApp', 'public listing')
        .replaceAll('Zalo', 'local directory')
        .replaceAll('Hotline', 'Local directory')
    : output
        .replaceAll('Zalo/WhatsApp', 'listing công khai')
        .replaceAll('Zalo', 'danh bạ địa phương')
        .replaceAll('Hotline', 'Danh bạ địa phương')
        .replaceAll('Gọi Ngay', 'Xem Danh Bạ')
        .replaceAll('Gọi ngay', 'Xem danh bạ');

  return output;
};

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  if (!response.headers.get('content-type')?.includes('text/html')) return response;

  const headers = new Headers(response.headers);
  headers.delete('content-length');

  return new Response(sanitizeLegacyRetailContact(await response.text(), context.url.pathname.startsWith('/en/')), {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
});
