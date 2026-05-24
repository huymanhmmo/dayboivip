/**
 * Tạo Course schema JSON-LD cho từng khóa học
 * @param {Object} course - Dữ liệu khóa học từ courses.js
 * @param {string} url - URL canonical của trang
 * @returns {Object} JSON-LD schema object
 */
export function generateCourseSchema(course, url) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `https://dayboi.vip/khoa-hoc-boi/${course.slug}/#course`,
    "name": course.shortTitle || course.title,
    "description": course.description,
    "url": url,
    "provider": {
      "@type": "Organization",
      "@id": "https://dayboi.vip/#organization",
      "name": "Swim For Life Việt Nam",
      "url": "https://dayboi.vip"
    },
    "offers": {
      "@type": "Offer",
      "category": "Khóa học bơi",
      "price": "0",
      "priceCurrency": "VND",
      "availability": "https://schema.org/InStock",
      "url": url,
      "description": "Liên hệ hotline 0979.121.097 để nhận báo giá chi tiết"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Onsite",
      "courseWorkload": `PT${course.duration === '10-12 buổi' ? '12' : '12'}H`,
      "instructor": {
        "@type": "Person",
        "@id": "https://dayboi.vip/#founder",
        "name": course.instructor.name,
        "jobTitle": course.instructor.title
      },
      "location": {
        "@type": "Place",
        "name": "Hệ thống bể bơi Swim For Life Việt Nam",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Hà Nội, TP.HCM",
          "addressCountry": "VN"
        }
      }
    },
    "educationalLevel": course.targetAudience,
    "inLanguage": "vi",
    "image": `https://dayboi.vip${course.heroImage}`,
    "coursePrerequisites": "Không yêu cầu kinh nghiệm bơi trước đó",
    "numberOfCredits": course.duration,
    "about": [
      { "@type": "Thing", "name": "Bơi lội" },
      { "@type": "Thing", "name": "Kỹ năng sinh tồn" },
      { "@type": "Thing", "name": "Thể dục thể thao" }
    ]
  };
}
