import Link from "next/link";

const models = [
  { name: "🤖 Android", slug: "android" },

  { name: "iPhone X", slug: "iphone-x" },
  { name: "iPhone XR", slug: "iphone-xr" },
  { name: "iPhone XS", slug: "iphone-xs" },
  { name: "iPhone XS Max", slug: "iphone-xs-max" },

  { name: "iPhone 11", slug: "iphone-11" },
  { name: "iPhone 11 Pro", slug: "iphone-11-pro" },
  { name: "iPhone 11 Pro Max", slug: "iphone-11-pro-max" },

  { name: "iPhone 12 mini", slug: "iphone-12-mini" },
  { name: "iPhone 12", slug: "iphone-12" },
  { name: "iPhone 12 Pro", slug: "iphone-12-pro" },
  { name: "iPhone 12 Pro Max", slug: "iphone-12-pro-max" },

  { name: "iPhone 13 mini", slug: "iphone-13-mini" },
  { name: "iPhone 13", slug: "iphone-13" },
  { name: "iPhone 13 Pro", slug: "iphone-13-pro" },
  { name: "iPhone 13 Pro Max", slug: "iphone-13-pro-max" },

  { name: "iPhone 14", slug: "iphone-14" },
  { name: "iPhone 14 Plus", slug: "iphone-14-plus" },
  { name: "iPhone 14 Pro", slug: "iphone-14-pro" },
  { name: "iPhone 14 Pro Max", slug: "iphone-14-pro-max" },

  { name: "iPhone 15", slug: "iphone-15" },
  { name: "iPhone 15 Plus", slug: "iphone-15-plus" },
  { name: "iPhone 15 Pro", slug: "iphone-15-pro" },
  { name: "iPhone 15 Pro Max", slug: "iphone-15-pro-max" },

  { name: "iPhone 16", slug: "iphone-16" },
  { name: "iPhone 16 Plus", slug: "iphone-16-plus" },
  { name: "iPhone 16 Pro", slug: "iphone-16-pro" },
  { name: "iPhone 16 Pro Max", slug: "iphone-16-pro-max" },

  { name: "iPhone 17", slug: "iphone-17" },
  { name: "iPhone 17 Air", slug: "iphone-17-air" },
  { name: "iPhone 17 Pro", slug: "iphone-17-pro" },
  { name: "iPhone 17 Pro Max", slug: "iphone-17-pro-max" },
];

export default function ModelsGrid() {
  return (
    <section id="iphone-models" style={section}>
      <h2 style={sectionTitle}>Обери свою модель</h2>

      <p style={sectionDesc}>
        Оберіть модель пристрою, щоб переглянути актуальні ціни на ремонт та доступні послуги.
      </p>

      <div style={modelGrid}>
        {models.map((model) => (
          <Link
            key={model.slug}
            href={`/remont-iphone/${model.slug}`}
            style={modelCard}
            className="model-card"
          >
            {model.name}
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
  scrollMarginTop: "90px",
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
  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  borderRadius: "15px",
  padding: "14px",
  color: "#F5F5F5",
  textDecoration: "none",
  fontSize: "14px",
  transition: "all 0.25s ease",
  cursor: "pointer",
};