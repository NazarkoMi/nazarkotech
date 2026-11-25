import Link from "next/link";
import Image from "next/image";

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
            className="phone-model-card"
          >
            <div className="phone-model-visual">
              <Image
                src={`/models/${model.slug}.webp`}
                alt=""
                width={160}
                height={160}
                className="phone-back"
                sizes="(max-width: 480px) 104px, 134px"
              />
            </div>
            <span className="phone-model-name">{model.name.replace("🤖 ", "")}</span>
            <span className="phone-model-action">Ціни на ремонт <span aria-hidden="true">→</span></span>
          </Link>
        ))}
      </div>
      <style>{`
        .phone-model-card { min-width: 0; text-align: center; overflow: hidden; display: flex !important; flex-direction: column; align-items: stretch; height: 100%; }
        .phone-model-card:hover, .phone-model-card:focus-visible {
          transform: translateY(-4px); border-color: #d4af37 !important;
          box-shadow: 0 12px 32px rgba(212,175,55,.14) !important;
        }
        .phone-model-card:focus-visible { outline: 2px solid #e5c65c; outline-offset: 3px; }
        .phone-model-visual { background: radial-gradient(ellipse at 50% 70%, rgba(212,175,55,.12), transparent 68%); border-radius: 12px; display: grid; place-items: center; height: 142px; flex-shrink: 0; }
        .phone-back { width: min(100%, 134px); height: 134px; object-fit: contain; transition: transform .25s ease; }
        .phone-model-card:hover .phone-back { transform: translateY(-3px) scale(1.045); }
        .phone-model-name { display: flex; align-items: center; justify-content: center; min-height: 2.6em; font-size: 15px; line-height: 1.3; font-weight: 700; margin: 10px 0 7px; }
        .phone-model-action { display: block; color: #c9ac58; font-size: 11px; font-weight: 600; margin-top: auto; }
        @media (max-width: 480px) {
          .phone-model-card { padding: 9px !important; }
          .phone-model-visual { height: 108px; }
          .phone-back { width: min(100%, 104px); height: 104px; }
          .phone-model-name { font-size: 13px; }
          .phone-model-action { font-size: 10px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .phone-model-card, .phone-back { transition: none !important; transform: none !important; }
        }
      `}</style>
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
  gridTemplateColumns: "repeat(auto-fit, minmax(min(136px, 100%), 1fr))",
  gridAutoRows: "1fr",
  gap: "12px",
};

const modelCard = {
  display: "block",
  background: "rgba(255,255,255,0.045)",
  border: "1px solid rgba(255,255,255,0.1)",
  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  borderRadius: "20px",
  padding: "12px",
  color: "#F5F5F5",
  textDecoration: "none",
  fontSize: "14px",
  transition: "all 0.25s ease",
  cursor: "pointer",
};
