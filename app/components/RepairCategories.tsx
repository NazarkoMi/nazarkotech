import Link from "next/link";

const categories = [
  {
  icon: "🍏",
  title: "iPhone",
  text: "Заміна екрана, батареї, скла, камер та інших компонентів.",
  href: "#iphone-models",
},
  {
    icon: "🤖",
    title: "Android",
    text: "Samsung, Xiaomi, Poco, Realme, Motorola та інші бренди.",
    href: "/remont-iphone/android",
  },
  {
    icon: "💻",
    title: "ПК",
    text: "Чистка, апгрейд, збірка, Windows, SSD, віруси та оптимізація.",
    href: "/remont-pc",
  },
  {
    icon: "💼",
    title: "Ноутбуки",
    text: "Чистка, термопаста, батарея, клавіатура, матриця та SSD.",
    href: "/remont-laptop",
  },
  {
    icon: "🎮",
    title: "PlayStation",
    text: "Чистка, термоінтерфейс, HDMI, SSD та налаштування.",
    href: "/remont-playstation",
  },
  {
    icon: "🕹️",
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

      <div style={grid}>
        {categories.map((category) => (
          <Link
            key={category.title}
            href={category.href}
            style={card}
            className="category-card"
          >
            <div style={icon}>{category.icon}</div>
            <h3 style={cardTitle}>{category.title}</h3>
            <p style={cardText}>{category.text}</p>
          </Link>
        ))}
      </div>
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
  gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
  gap: "16px",
};

const card = {
  display: "block",
  background: "rgba(255,255,255,0.045)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "22px",
  padding: "26px",
  color: "white",
  textDecoration: "none",
  boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
};

const icon = {
  fontSize: "34px",
  marginBottom: "18px",
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