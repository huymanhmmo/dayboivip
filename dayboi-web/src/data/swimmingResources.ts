import {languageHref} from './locality/common';
const root='/images/landing/lai-thieu';
const strokes=[
  ['Dạy bơi ếch','Breaststroke','technique-breaststroke-side-breathing.webp','hoc-boi-ech','Tập nhịp chân, tay và lấy hơi.','Coordinate the kick, arm sweep and breath.'],
  ['Dạy bơi sải','Freestyle','technique-front-crawl-underwater.webp','hoc-boi-sai','Rèn tư thế và nhịp thở nghiêng.','Build body alignment and side breathing.'],
  ['Dạy bơi ngửa','Backstroke','technique-backstroke-surface-full-body.webp','hoc-boi-ngua','Giữ thăng bằng và phối hợp tay chân.','Find balance and coordinate arms and legs.'],
  ['Dạy bơi bướm','Butterfly','technique-butterfly-underwater.webp','hoc-boi-buom','Phối hợp sóng thân, chân và hai tay.','Coordinate body rhythm and simultaneous arms.'],
  ['Kỹ năng đứng nước','Treading water','technique-treading-water.webp','ky-nang-dung-nuoc','Tập giữ nổi và bình tĩnh dưới nước.','Practise staying afloat and calm in the water.'],
];
export const swimmingTechniques=(lang:'vi'|'en')=>strokes.map(([vi,en,image,slug,description,enDescription])=>({title:lang==='en'?en:vi,image:root+'/'+image,imageAlt:lang==='en'?`Illustration of ${en.toLowerCase()} technique`:`Minh họa kỹ thuật ${vi.toLowerCase()}`,href:languageHref('/ky-thuat-boi/'+slug+'/',lang),description:lang==='en'?enDescription:description}));
export const learningImages=[root+'/children.webp',root+'/adults.webp',root+'/hero.webp',root+'/confidence.webp'];
