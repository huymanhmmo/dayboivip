/**
 * Tạo HowTo schema cho trang kỹ thuật bơi
 */
export function generateHowToSchema(technique, steps, canonical) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `Hướng dẫn kỹ thuật ${technique.name} chi tiết từ A-Z`,
    "description": technique.description,
    "image": `https://dayboi.vip${technique.videoPoster || '/images/default-hero.jpg'}`,
    "totalTime": "PT45M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "VND",
      "value": "0"
    },
    "supply": [
      { "@type": "HowToSupply", "name": "Kính bơi" },
      { "@type": "HowToSupply", "name": "Mũ bơi" },
      { "@type": "HowToSupply", "name": "Quần/áo bơi" },
      { "@type": "HowToSupply", "name": "Ván tập bơi (kickboard)" }
    ],
    "tool": [
      { "@type": "HowToTool", "name": "Bể bơi (độ sâu 1.2 - 1.6m)" },
      { "@type": "HowToTool", "name": "Phao xốp hỗ trợ" }
    ],
    "step": steps,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonical
    }
  };
}
