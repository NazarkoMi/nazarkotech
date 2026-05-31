import type { Metadata } from "next";
import { iphoneRepairs } from "../../data/iphoneRepairs";
import Header from "../../components/Header";
import Link from "next/link";
import BatteryInfo from "../../components/BatteryInfo";

type Props = {
  params: Promise<{
    model: string;
  }>;
};

const repairs = [
  { title: "Заміна екрана Оригаінал/Високоякісний аналог", price: "від 1550 грн", time: "2–4 год" },
  { title: "Заміна акумулятора", price: "від 1190 грн", time: "1–2 год" },
  { title: "Заміна роз'єму зарядки", price: "від 1490 грн", time: "2–3 год" },
  { title: "Заміна камери", price: "від 1790 грн", time: "2–4 год" },
  { title: "Переклейка заднього скла", price: "від 1790 грн", time: "3–5 год" },
  { title: "Комплексна чистка", price: "від 790 грн", time: "1–2 год" },
  { title: "Діагностика", price: "безкоштовно", time: "15–30 хв" },
];

function formatModel(slug: string) {
  return slug
    .split("-")
    .map((word) => {
      if (word === "iphone") return "iPhone";
      if (word === "pro") return "Pro";
      if (word === "max") return "Max";
      if (word === "mini") return "mini";
      if (word === "plus") return "Plus";
      if (word === "air") return "Air";
      return word.toUpperCase();
    })
    .join(" ");
}

function getRepairIcon(title: string) {
  if (title.includes("екрана")) return "📱";
  if (title.includes("акумулятора")) return "🔋";
  if (title.includes("роз'єму")) return "⚡";
  if (title.includes("камери")) return "📷";
  if (title.includes("чистка")) return "🧼";
  if (title.includes("Діагностика")) return "🛠️";
  if (title.includes("скла")) return "✨";
  if (title.includes("динаміка")) return "🔊";
  if (title.includes("герметичності")) return "💧";
  if (title.includes("фронтальної")) return "🤳";
  if (title.includes("Android")) return "🤖";
  if (title.includes("Нова оригінальна")) return "🍏";
  if (title.includes("Вживана")) return "♻️";
  if (title.includes("Невідома")) return "🔋";
  return "🔧";
}

function getRepairInfo(title: string) {
  if (title.includes("Невідома деталь")) {
    return "У налаштуваннях iPhone буде відображатись: Акумулятор — Невідома деталь.";
  }

  if (title.includes("Вживана деталь")) {
    return "У налаштуваннях iPhone буде відображатись: Акумулятор — Вживана деталь, стан 100%.";
  }

  if (title.includes("Нова оригінальна деталь")) {
    return "У налаштуваннях iPhone буде відображатись: Акумулятор — Нова оригінальна деталь, стан 100%.";
  }

  return "";
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const modelData = iphoneRepairs[resolvedParams.model];
  const modelName = modelData?.name || formatModel(resolvedParams.model);

  return {
    title: `Ремонт ${modelName} у Львові | NazarkoTech`,
    description: `Професійний ремонт ${modelName} у Львові. Заміна екрана, акумулятора, роз'єму зарядки, камери та інших компонентів.`,
  };
}

export default async function ModelPage({ params }: Props) {
  const { model } = await params;
  const modelData = iphoneRepairs[model];
  const modelName = modelData?.name || formatModel(model);
  const repairsList = modelData?.repairs || repairs;

  return (
    <main style={page}>
      <Header />

      <div style={backWrap}>
  <Link href="/" style={backButton}>
    ← На головну
  </Link>
</div>

      <section style={hero}>
        <p style={eyebrow}>NazarkoTech · Ремонт iPhone</p>

        <h1 style={title}>Ремонт {modelName}</h1>

        <p style={subtitle}>
  {model === "android"
    ? "Ремонт Android смартфонів будь-якої складності. Для уточнення вартості ремонту зверніться у Telegram або Viber."
    : `Заміна екрана, акумулятора, роз'єму зарядки, камери, заднього скла та інших компонентів для ${modelName}.`}
</p>
      </section>

      <section style={section}>
        <h2 style={sectionTitle}>Популярні ремонти</h2>

        <div style={grid} className="model-repair-grid">
          {repairsList.map((repair) => {
  const repairInfo = getRepairInfo(repair.title);

  return (
    <div
      key={repair.title}
      style={card}
      className="repair-card"
      data-info={repairInfo || undefined}
    >
      <span style={icon}>{getRepairIcon(repair.title)}</span>

      <h3 style={cardTitle}>{repair.title}</h3>

      <div className="repair-price-block">
        <p style={priceText}>{repair.price}</p>
        <p style={mutedText}>{repair.time}</p>
      </div>
    </div>
  );
})}
        </div>
      </section>
      <BatteryInfo />
      <section style={cta} className="cta-model">
        <h2 style={ctaTitle}>Записатись на ремонт</h2>

        <p style={ctaText}>
          Напиши у Telegram або Viber, вкажи модель iPhone та проблему.
        </p>

        <div style={buttonRow} className="cta-model-buttons">
          <Link href="https://t.me/NazarkoMi" style={goldButton} className="btn">
            Telegram
          </Link>

          <Link
            href="viber://chat?number=%2B380686293605"
            style={darkButton}
            className="btn"
          >
            Viber
          </Link>
        </div>
      </section>

      <style>{`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  main {
    overflow-x: hidden;
  }

  .repair-card,
  .btn {
    transition: all 0.25s ease;
  }

  .repair-card:hover {
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
    .model-repair-grid {
      grid-template-columns: 1fr !important;
      gap: 14px !important;
    }

    .repair-card {
      width: 100% !important;
      display: grid !important;
      grid-template-columns: 38px 1fr auto !important;
      align-items: center !important;
      gap: 14px !important;
      padding: 20px 16px !important;
      border-radius: 20px !important;
    }

    .repair-card h3 {
      margin: 0 !important;
      font-size: 17px !important;
      line-height: 1.3 !important;
    }

    .repair-card p {
      margin: 0 !important;
    }

    .repair-price-block {
      text-align: right !important;
      min-width: 92px !important;
    }

    .repair-card:hover,
    .btn:hover {
      transform: none !important;
    }

    .cta-model {
      margin: 30px 16px 60px !important;
      padding: 34px 22px !important;
      text-align: left !important;
    }

    .cta-model h2 {
      font-size: 34px !important;
      line-height: 1.2 !important;
    }

    .cta-model-buttons {
      justify-content: flex-start !important;
      flex-direction: column !important;
    }
  }

  @media (max-width: 420px) {
    .repair-card {
      grid-template-columns: 34px 1fr !important;
    }

    .repair-price-block {
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
  background:
    "radial-gradient(circle at 70% 15%, rgba(212,175,55,0.16), transparent 28%), #050505",
  color: "white",
  fontFamily: "Arial, sans-serif",
};

const hero = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "90px 24px 40px",
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
  maxWidth: "700px",
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
  fontSize: "22px",
};

const cardTitle = {
  fontSize: "18px",
  marginBottom: "16px",
  whiteSpace: "pre-line" as const,
  lineHeight: "1.4",
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

const backWrap = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "20px 24px 0",
};

const backButton = {
  color: "#D4AF37",
  textDecoration: "none",
  fontSize: "15px",
  border: "1px solid rgba(212,175,55,0.25)",
  padding: "10px 16px",
  borderRadius: "14px",
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  background: "rgba(212,175,55,0.05)",
};
