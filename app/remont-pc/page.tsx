import Header from "../components/Header";
import Link from "next/link";

const services = [
  { icon: "🧹", title: "Комплексна чистка ПК", price: "від 500 грн", time: "1–2 год" },
  { icon: "🌡️", title: "Заміна термопасти", price: "від 350 грн", time: "30–60 хв" },
  { icon: "💽", title: "Встановлення SSD", price: "від 300 грн", time: "30–60 хв" },
  { icon: "🪟", title: "Встановлення Windows", price: "від 400 грн", time: "1–2 год" },
  { icon: "⚡", title: "Апгрейд ПК", price: "індивідуально", time: "після огляду" },
  { icon: "🎮", title: "Оптимізація для ігор", price: "від 400 грн", time: "1–2 год" },
  { icon: "🛡️", title: "Видалення вірусів", price: "від 350 грн", time: "1–2 год" },
  { icon: "🔍", title: "Діагностика", price: "безкоштовно", time: "15–30 хв" },
];

export default function PcRepairPage() {
  return (
    <main style={page}>
      <Header />

      <section style={hero}>
        <Link href="/" style={backButton}>← На головну</Link>

        <p style={eyebrow}>NazarkoTech · Ремонт ПК</p>

        <h1 style={title}>Ремонт та обслуговування ПК у Львові</h1>

        <p style={subtitle}>
          Чистка, апгрейд, встановлення Windows, SSD, оптимізація для ігор,
          діагностика та обслуговування компʼютерів.
        </p>
      </section>

      <section style={section}>
        <h2 style={sectionTitle}>Популярні послуги</h2>

        <div style={grid}>
          {services.map((service) => (
            <div key={service.title} style={card} className="service-card">
              <span style={icon}>{service.icon}</span>
              <h3 style={cardTitle}>{service.title}</h3>

              <div className="service-price-block">
                <p style={priceText}>{service.price}</p>
                <p style={mutedText}>{service.time}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={cta} className="cta-model">
        <h2 style={ctaTitle}>Потрібен ремонт ПК?</h2>

        <p style={ctaText}>
          Напиши у Telegram або Viber, коротко опиши проблему та характеристики ПК.
        </p>

        <div style={buttonRow} className="cta-model-buttons">
          <Link href="https://t.me/NazarkoMi" style={goldButton} className="btn">
            Telegram
          </Link>

          <Link href="viber://chat?number=%2B380686293605" style={darkButton} className="btn">
            Viber
          </Link>
        </div>
      </section>

      <style>{`
        * { box-sizing: border-box; }

        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        main { overflow-x: hidden; }

        .service-card,
        .btn {
          transition: all 0.25s ease;
        }

        .service-card:hover {
          transform: translateY(-6px) scale(1.03);
          border-color: rgba(212,175,55,0.65) !important;
          box-shadow:
            0 20px 70px rgba(212,175,55,0.16),
            0 0 40px rgba(212,175,55,0.08);
        }

        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 40px rgba(212,175,55,0.22);
        }

        @media (max-width: 768px) {
          .service-card:hover,
          .btn:hover {
            transform: none !important;
          }

          .service-card {
            display: grid !important;
            grid-template-columns: 38px 1fr auto !important;
            align-items: center !important;
            gap: 14px !important;
            padding: 20px 16px !important;
          }

          .service-card h3 {
            margin: 0 !important;
            font-size: 17px !important;
            line-height: 1.3 !important;
          }

          .service-card p {
            margin: 0 !important;
          }

          .service-price-block {
            text-align: right !important;
            min-width: 90px !important;
          }
        }

        @media (max-width: 420px) {
          .service-card {
            grid-template-columns: 34px 1fr !important;
          }

          .service-price-block {
            grid-column: 2;
            text-align: left !important;
            margin-top: 8px;
          }
        }
      `}</style>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background: "radial-gradient(circle at 70% 15%, rgba(212,175,55,0.16), transparent 28%), #050505",
  color: "white",
  fontFamily: "Arial, sans-serif",
};

const hero = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "32px 24px 40px",
};

const backButton = {
  display: "inline-flex",
  marginBottom: "38px",
  color: "#D4AF37",
  textDecoration: "none",
  border: "1px solid rgba(212,175,55,0.25)",
  padding: "10px 16px",
  borderRadius: "14px",
  background: "rgba(212,175,55,0.05)",
};

const eyebrow = {
  color: "#D4AF37",
  fontSize: "15px",
  marginBottom: "18px",
};

const title = {
  fontSize: "clamp(38px, 7vw, 58px)",
  margin: "0 0 24px",
  lineHeight: "1.08",
};

const subtitle = {
  fontSize: "19px",
  color: "#A3A3A3",
  lineHeight: "1.6",
  maxWidth: "760px",
};

const section = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "30px 24px",
};

const sectionTitle = {
  fontSize: "34px",
  marginBottom: "24px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "16px",
};

const card = {
  background: "rgba(255,255,255,0.045)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "22px",
  padding: "28px",
};

const icon = {
  fontSize: "24px",
};

const cardTitle = {
  fontSize: "18px",
  margin: "16px 0",
};

const priceText = {
  color: "#D4AF37",
  fontSize: "17px",
  margin: 0,
};

const mutedText = {
  color: "#777",
  marginTop: "10px",
  fontSize: "14px",
};

const cta = {
  maxWidth: "1180px",
  margin: "40px auto 80px",
  padding: "32px 24px",
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

const buttonRow = {
  display: "flex",
  gap: "14px",
  justifyContent: "center",
  marginTop: "28px",
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