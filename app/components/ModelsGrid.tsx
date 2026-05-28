import Link from "next/link";
const models = [
  "iPhone X", "iPhone XR", "iPhone XS", "iPhone XS Max",
  "iPhone 11", "iPhone 11 Pro", "iPhone 11 Pro Max",
  "iPhone 12 mini", "iPhone 12", "iPhone 12 Pro", "iPhone 12 Pro Max",
  "iPhone 13 mini", "iPhone 13", "iPhone 13 Pro", "iPhone 13 Pro Max",
  "iPhone 14", "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max",
  "iPhone 15", "iPhone 15 Plus", "iPhone 15 Pro", "iPhone 15 Pro Max",
  "iPhone 16", "iPhone 16 Plus", "iPhone 16 Pro", "iPhone 16 Pro Max",
  "iPhone 17", "iPhone 17 Air", "iPhone 17 Pro", "iPhone 17 Pro Max",
];

function slugify(model: string) {
  return model
    .toLowerCase()
    .replaceAll(" ", "-");
}

export default function ModelsGrid() {
  return (
    <section style={section}>
      <h2 style={sectionTitle}>
        Обери свою модель iPhone
      </h2>

      <p style={sectionDesc}>
        Для кожної моделі буде окрема сторінка
        з усіма доступними ремонтами.
      </p>

      <div style={modelGrid}>
        {models.map((model) => (
          <Link
  key={model}
  href={`/remont-iphone/${slugify(model)}`}
  style={modelCard}
  className="model-card"
>
  {model}
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
  marginBottom: "18px",
};

const sectionDesc = {
  color: "#A3A3A3",
  marginBottom: "26px",
  fontSize: "16px",
};

const modelGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  gap: "12px",
};

const modelCard = {
  display: "block",
  background: "rgba(255,255,255,0.045)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "15px",
  padding: "14px",
  color: "#F5F5F5",
  textDecoration: "none",
  fontSize: "14px",
  transition: "all 0.25s ease",
  cursor: "pointer",
};