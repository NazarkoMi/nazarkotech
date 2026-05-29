import Header from "./components/Header";
import Hero from "./components/Hero";
import RepairCards from "./components/RepairCards";
import ModelsGrid from "./components/ModelsGrid";
import RepairCategories from "./components/RepairCategories";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <main style={page}>
      <Header />
      <Hero />
      <RepairCategories />
      <WhyUs />
      <RepairCards />
      <ModelsGrid />

      <section style={ctaWrap}>
        <h2 style={ctaTitle}>Записатись на ремонт</h2>

        <p style={ctaText}>
          Напиши у Telegram або Viber, вкажи модель пристрою та проблему.
        </p>

        <div style={buttonCenter}>
          <a href="https://t.me/NazarkoMi" style={goldButton} className="btn">
            Telegram
          </a>

          <a
            href="viber://chat?number=%2B380686293605"
            style={darkButton}
            className="btn"
          >
            Viber
          </a>
        </div>
      </section>

      <footer style={footer}>
        © 2026 NazarkoTech · Львів та Нововолинськ · +380686293605
      </footer>

      <style>{`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          scroll-behavior: smooth;
          background: #050505;
        }

        main {
          overflow-x: hidden;
        }

        .repair-card,
        .model-card,
        .category-card,
        .why-card,
        .btn {
          transition: all 0.25s ease;
        }

        .repair-card:hover,
        .model-card:hover,
        .category-card:hover,
        .why-card:hover {
          transform: translateY(-6px) scale(1.03);
          border-color: rgba(212, 175, 55, 0.65) !important;
          box-shadow:
            0 20px 70px rgba(212, 175, 55, 0.16),
            0 0 40px rgba(212, 175, 55, 0.08);
          background: rgba(255,255,255,0.06);
        }

        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 40px rgba(212, 175, 55, 0.22);
        }

        @media (max-width: 768px) {
          .repair-card:hover,
          .model-card:hover,
          .category-card:hover,
          .why-card:hover,
          .btn:hover {
            transform: none;
          }

          @media (max-width: 768px) {
  h1 {
    font-size: 42px !important;
    line-height: 1.1 !important;
  }
}

          .repair-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
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

const goldButton = {
  background: "#D4AF37",
  color: "black",
  padding: "14px 24px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "bold",
};

const darkButton = {
  border: "1px solid rgba(255,255,255,0.18)",
  color: "white",
  padding: "14px 24px",
  borderRadius: "14px",
  textDecoration: "none",
  background: "rgba(255,255,255,0.04)",
};

const ctaWrap = {
  maxWidth: "1180px",
  margin: "35px auto 70px",
  padding: "46px 24px",
  borderRadius: "28px",
  background: "rgba(212,175,55,0.08)",
  border: "1px solid rgba(212,175,55,0.18)",
  textAlign: "center" as const,
};

const ctaTitle = {
  fontSize: "36px",
  margin: 0,
};

const ctaText = {
  color: "#A3A3A3",
  fontSize: "17px",
  marginTop: "14px",
};

const buttonCenter = {
  display: "flex",
  gap: "14px",
  justifyContent: "center",
  marginTop: "28px",
};

const footer = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "28px 24px",
  borderTop: "1px solid rgba(255,255,255,0.08)",
  color: "#777",
};