import Header from "./components/Header";
import Link from "next/link";
import Hero from "./components/Hero";
import RepairCards from "./components/RepairCards";
import ModelsGrid from "./components/ModelsGrid";
import RepairCategories from "./components/RepairCategories";
import WhyUs from "./components/WhyUs";
import Reviews from "./components/Reviews";
import OurWorks from "./components/OurWorks";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main style={page}>
      <Header />
      <Hero />
      <div id="repair-catalog">
        <RepairCategories />
        <ModelsGrid />
      </div>
      <WhyUs />
      <Reviews />
      <RepairCards />
      <OurWorks />

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

      <FAQ />

      <aside className="linkcom-banner" aria-label="Партнерська пропозиція LinkCom">
        <Link href="/partnership">Промокод LinkCom у Львові <span aria-hidden="true">→</span></Link>
      </aside>

      <Footer />

      <style>{`
        .home-hero {
          display: grid;
          grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
          align-items: center;
          gap: 20px;
          max-width: 1180px;
          min-height: 475px;
          margin-inline: auto;
          padding: clamp(38px, 6vw, 76px) 24px;
        }

        .home-hero-location { color: #dfc37d; font-size: 14px; margin: 0 0 18px; }
        .home-hero h1 {
          max-width: 9ch;
          margin: 0;
          color: #f7f5ee;
          font-size: clamp(45px, 6.5vw, 88px);
          font-weight: 600;
          line-height: .99;
          letter-spacing: -.055em;
          text-wrap: balance;
        }
        .home-hero-description { margin: 22px 0 0; color: #bcbab4; font-size: clamp(16px, 2vw, 19px); line-height: 1.6; }
        .home-hero-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 18px; margin-top: 26px; }
        .home-hero-actions a { display: inline-flex; align-items: center; gap: 12px; min-height: 46px; font-weight: 600; text-decoration: none; }
        .home-hero-actions a:focus-visible { outline: 2px solid #ebd39a; outline-offset: 4px; }
        .home-hero-primary { background: #e3c37c; color: #18140d; padding: 10px 16px; border-radius: 10px; }
        .home-hero-primary:hover { background: #f0d599; }
        .home-hero-phone { color: #f7f5ee; padding-inline: 4px; }
        .home-hero-phone:hover { text-decoration: underline; text-underline-offset: 5px; }
        .home-hero-visual { background: radial-gradient(ellipse at center, #28251d 0%, #141413 60%, #101010 100%); border: 1px solid #2b2a27; border-radius: 24px; }
        .home-hero-visual img { display: block; width: 100%; height: auto; }

        #repair-catalog { scroll-margin-top: 105px; }
        #repair-catalog .category-card { box-shadow: none !important; }
        #repair-catalog .category-visual { background: #1d1d1d; }
        #repair-catalog .phone-model-visual { background: radial-gradient(ellipse at center, #262520, transparent 72%); }

        .linkcom-banner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px 24px;
          font-size: 14px;
        }

        .linkcom-banner a {
          color: #e8c75e;
          font-weight: 700;
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .linkcom-banner a:focus-visible {
          outline: 2px solid #e8c75e;
          outline-offset: 4px;
        }

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
        .review-card,
        .work-card,
        .btn {
          transition: border-color .2s ease, background-color .2s ease;
        }

        .repair-card:hover,
        .model-card:hover,
        .category-card:hover,
        .why-card:hover,
        .review-card:hover,
        .work-card:hover {
          border-color: rgba(227, 195, 124, .42) !important;
        }

        .btn:hover {
          border-color: rgba(227, 195, 124, .55) !important;
        }

        @media (max-width: 760px) {
          .home-hero { grid-template-columns: 1fr; gap: 24px; min-height: 0; padding-block: 34px 12px; }
          .home-hero h1 { max-width: none; }
          .home-hero-description { margin-top: 14px; }
          .home-hero-actions { margin-top: 18px; }
          .home-hero-visual { max-width: 520px; border-radius: 18px; }
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
  background: "#0d0d0d",
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
