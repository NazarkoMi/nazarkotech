import Header from "../components/Header";
import Link from "next/link";

const priceGroups = [
  {
    title: "iPhone / Android",
    items: [
      ["Діагностика", "безкоштовно"],
      ["Заміна екрана", "від 2050 грн"],
      ["Заміна батареї", "від 1050 грн"],
      ["Заміна розʼєму зарядки", "від 1490 грн"],
      ["Комплексна чистка", "від 350 грн"],
    ],
  },
  {
    title: "ПК / Ноутбуки",
    items: [
      ["Діагностика", "безкоштовно"],
      ["Чистка ПК", "від 500 грн"],
      ["Чистка ноутбука", "від 600 грн"],
      ["Встановлення Windows", "від 400 грн"],
      ["Встановлення SSD", "від 300 грн"],
    ],
  },
  {
    title: "PlayStation / Xbox",
    items: [
      ["Діагностика", "безкоштовно"],
      ["Комплексна чистка", "від 600 грн"],
      ["Заміна термопасти", "від 500 грн"],
      ["Ремонт HDMI", "від 1200 грн"],
      ["Обслуговування геймпадів", "від 400 грн"],
    ],
  },
];

export default function PricePage() {
  return (
    <main style={page}>
      <Header />

      <section style={hero}>
        <Link href="/" style={backButton}>← На головну</Link>
        <p style={eyebrow}>NazarkoTech · Ціни</p>
        <h1 style={title}>Ціни на ремонт техніки</h1>
        <p style={subtitle}>
          Орієнтовна вартість популярних послуг. Точна ціна залежить від моделі
          пристрою та стану після діагностики.
        </p>
      </section>

      <section style={section}>
        <div style={grid}>
          {priceGroups.map((group) => (
            <div key={group.title} style={card}>
              <h2 style={cardTitle}>{group.title}</h2>

              {group.items.map(([name, price]) => (
                <div key={name} style={row}>
                  <span>{name}</span>
                  <strong style={priceText}>{price}</strong>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at 70% 15%, rgba(212,175,55,0.16), transparent 28%), #050505",
  color: "white",
  fontFamily: "Arial, sans-serif",
};

const hero = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "40px 24px",
};

const backButton = {
  display: "inline-flex",
  marginBottom: "30px",
  color: "#D4AF37",
  textDecoration: "none",
};

const eyebrow = {
  color: "#D4AF37",
};

const title = {
  fontSize: "clamp(38px, 7vw, 58px)",
  margin: "0 0 20px",
};

const subtitle = {
  color: "#A3A3A3",
  maxWidth: "760px",
  lineHeight: "1.6",
};

const section = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "20px 24px 80px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "18px",
};

const card = {
  background: "rgba(255,255,255,0.045)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "24px",
  padding: "24px",
};

const cardTitle = {
  fontSize: "24px",
  marginBottom: "20px",
};

const row = {
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
  padding: "14px 0",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
};

const priceText = {
  color: "#D4AF37",
  whiteSpace: "nowrap" as const,
};