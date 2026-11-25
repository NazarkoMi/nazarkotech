import Link from "next/link";
import Image from "next/image";

const categories = [
  {
  image: "/models/iphone-17-pro.webp",
  title: "iPhone",
  text: "Заміна екрана, батареї, скла, камер та інших компонентів.",
  href: "#iphone-models",
},
  {
    image: "/categories/android.webp",
    title: "Android",
    text: "Samsung, Xiaomi, Poco, Realme, Motorola та інші бренди.",
    href: "/remont-iphone/android",
  },
  {
    image: "/categories/pc.webp",
    title: "ПК",
    text: "Чистка, апгрейд, збірка, Windows, SSD, віруси та оптимізація.",
    href: "/remont-pc",
  },
  {
    image: "/categories/laptop.webp",
    title: "Ноутбуки",
    text: "Чистка, термопаста, батарея, клавіатура, матриця та SSD.",
    href: "/remont-laptop",
  },
  {
    image: "/categories/playstation.webp",
    title: "PlayStation",
    text: "Чистка, термоінтерфейс, HDMI, SSD та налаштування.",
    href: "/remont-playstation",
  },
  {
    image: "/categories/xbox.webp",
    title: "Xbox",
    text: "Чистка, термопаста, HDMI, SSD та діагностика.",
    href: "/remont-xbox",
  },
];

export default function RepairCategories() {
  return (
    <section style={section}>
      <h2 style={sectionTitle}>Що ремонтуємо</h2>

      <p style={sectionDesc}>
        Обслуговування смартфонів, компʼютерів, ноутбуків та ігрових консолей.
      </p>

      <div className="repair-category-grid" style={grid}>
        {categories.map((category) => (
          <Link
            key={category.title}
            href={category.href}
            style={card}
            className="category-card"
          >
            <div className="category-visual">
              <Image
                src={category.image}
                alt=""
                width={180}
                height={180}
                sizes="(max-width: 540px) 120px, 164px"
                className="category-device"
              />
            </div>
            <h3 style={cardTitle}>{category.title}</h3>
            <p style={cardText}>{category.text}</p>
            <span className="category-action">Детальніше про ремонт <span aria-hidden="true">→</span></span>
          </Link>
        ))}
      </div>
      <style>{`
        .category-card { min-width: 0; display: flex !important; flex-direction: column; height: 100%; }
        .category-visual { display: grid; place-items: center; height: 160px; margin-bottom: 19px; flex-shrink: 0; background: #1c1c1c; border-radius: 15px; overflow: hidden; }
        .category-device { width: 150px; height: 150px; object-fit: contain; transition: transform .25s ease; }
        .category-card:hover .category-device { transform: scale(1.06); }
        .category-action { display: flex; justify-content: space-between; gap: 8px; align-items: center; color: #d4af37; font-size: 13px; font-weight: 600; margin-top: auto; padding-top: 20px; }
        .category-card:focus-visible { outline: 2px solid #d4af37; outline-offset: 3px; }
        @media (max-width: 800px) { .repair-category-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; } }
        @media (max-width: 540px) { .category-card { padding: 14px !important; } .category-visual { height: 120px; margin-bottom: 14px; } .category-device { width: 110px; height: 110px; } .category-action { font-size: 12px; padding-top: 14px; } }
        @media (max-width: 350px) { .repair-category-grid { grid-template-columns: 1fr !important; } }
        @media (prefers-reduced-motion: reduce) { .category-device { transition: none !important; transform: none !important; } }
      `}</style>
    </section>
  );
}

const section = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "45px 24px",
};

const sectionTitle = {
  fontSize: "34px",
  marginBottom: "14px",
};

const sectionDesc = {
  color: "#A3A3A3",
  marginBottom: "26px",
  fontSize: "16px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gridAutoRows: "1fr",
  gap: "16px",
};

const card = {
  display: "flex",
  flexDirection: "column" as const,
  background: "rgba(255,255,255,0.045)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "22px",
  padding: "26px",
  color: "white",
  textDecoration: "none",
  boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
};

const cardTitle = {
  fontSize: "21px",
  margin: "0 0 12px",
};

const cardText = {
  color: "#A3A3A3",
  fontSize: "15px",
  lineHeight: "1.55",
  margin: 0,
};
