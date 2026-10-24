/**
 * Tạo Course schema JSON-LD cho từng khóa học chuẩn Google Rich Results & AEO
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
      "name": "Trung tâm dạy bơi Swim For Life Việt Nam",
      "url": "https://dayboi.vip",
      "logo": "https://dayboi.vip/images/logo/swim-for-life-logo.png"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "195",
      "reviewCount": "148"
    },
    "offers": {
      "@type": "Offer",
      "category": "Khóa học bơi",
      "price": "0",
      "priceCurrency": "VND",
      "availability": "https://schema.org/InStock",
      "url": url,
      "description": "Liên hệ hotline 0979.121.097 để nhận ưu đãi đăng ký học thử miễn phí"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Onsite",
      "courseWorkload": "PT12H",
      "instructor": {
        "@type": "Person",
        "@id": "https://dayboi.vip/#founder",
        "name": (course.instructor && course.instructor.name) || "Thầy Nguyễn Huy Mạnh",
        "jobTitle": (course.instructor && course.instructor.title) || "Giám đốc Trung tâm Swim For Life"
      },
      "location": {
        "@type": "Place",
        "name": "Hệ thống bể bơi bốn mùa Swim For Life (Vinhomes & Bể bơi liên kết cao cấp)",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Hà Nội, TP.HCM",
          "addressCountry": "VN"
        }
      }
    },
    "educationalLevel": course.targetAudience || "Mọi lứa tuổi",
    "inLanguage": "vi",
    "image": `https://dayboi.vip${course.heroImage}`,
    "coursePrerequisites": "Không yêu cầu kinh nghiệm bơi trước đó, phù hợp cả người sợ nước",
    "numberOfCredits": course.duration || "10-12 buổi",
    "about": [
      { "@type": "Thing", "name": "Bơi lội" },
      { "@type": "Thing", "name": "Kỹ năng sinh tồn" },
      { "@type": "Thing", "name": "Thể dục thể thao" },
      { "@type": "Thing", "name": "Phòng chống đuối nước" }
    ]
  };
}
