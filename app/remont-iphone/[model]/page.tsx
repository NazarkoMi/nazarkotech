import type { Metadata } from "next";
import { iphoneRepairs } from "../../data/iphoneRepairs";
import Header from "../../components/Header";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import BatteryInfo from "../../components/BatteryInfo";

type Props = {
  params: Promise<{
    model: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(iphoneRepairs).map((model) => ({ model }));
}

function getModelData(model: string) {
  return Object.prototype.hasOwnProperty.call(iphoneRepairs, model) ? iphoneRepairs[model] : undefined;
}

function getRepairImage(title: string, model: string) {
  const name = title.toLowerCase();
  let key = "android";

  if (name.includes("екран")) {
    key = name.includes("оригінал") && !name.includes("аналог") ? "screen-original" : "screen-oled";
  } else if (name.includes("батареї") || name.includes("акумулятор")) {
    key = name.includes("нова оригінальна") ? "battery-new" : name.includes("вживана") ? "battery-used" : "battery-unknown";
  } else if (name.includes("зарядки")) {
    const usesLightning = model.startsWith("iphone-x") || /^iphone-1[1-4](?:-|$)/.test(model);
    key = usesLightning ? "charging-lightning" : "charging-port";
  } else if (name.includes("камер")) {
    key = "camera";
  } else if (name.includes("заднь")) {
    key = "rear-glass";
  } else if (name.includes("чистк")) {
    key = "cleaning";
  } else if (name.includes("діагностик")) {
    key = "diagnostics";
  } else if (name.includes("води")) {
    key = "water";
  }

  return `/phone-services/${key}.webp`;
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
  const { model } = await params;
  const modelData = getModelData(model);
  if (!modelData) {
    return { title: "Модель не знайдено | NazarkoTech", robots: { index: false } };
  }
  const { name: modelName } = modelData;

  return {
    title: `Ремонт ${modelName} у Львові | NazarkoTech`,
    description: `Професійний ремонт ${modelName} у Львові. Заміна екрана, акумулятора, роз'єму зарядки, камери та інших компонентів.`,
  };
}

export default async function ModelPage({ params }: Props) {
  const { model } = await params;
  const modelData = getModelData(model);
  if (!modelData) notFound();
  const { name: modelName, repairs: repairsList } = modelData;

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
      <div className="repair-visual">
        <Image
          src={getRepairImage(repair.title, model)}
          alt=""
          width={450}
          height={300}
          sizes="(max-width: 768px) 96px, 240px"
          className="repair-image"
        />
      </div>

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
      {model !== "android" && <BatteryInfo />}
      <section style={cta} className="cta-model">
        <h2 style={ctaTitle}>Записатись на ремонт</h2>

          <p style={ctaText}>
            {model === "android"
            ? "Напиши у Telegram або Viber, вкажи модель смартфона та проблему."
            : "Напиши у Telegram або Viber, вкажи модель iPhone та проблему."}
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

  .model-repair-grid .repair-card {
    display: flex;
    flex-direction: column;
    min-height: 180px;
    height: 100%;
  }

  .model-repair-grid .repair-price-block {
    margin-top: auto;
  }

  .repair-visual {
    width: 100%;
    aspect-ratio: 3 / 2;
    border-radius: 13px;
    overflow: hidden;
    flex-shrink: 0;
    background: #1b1b1b;
  }

  .repair-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .25s ease;
  }

  .repair-card:hover .repair-image { transform: scale(1.04); }

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
      grid-template-columns: 92px minmax(0, 1fr) !important;
      align-items: center !important;
      gap: 14px !important;
      padding: 20px 16px !important;
      border-radius: 20px !important;
      min-height: 104px !important;
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
      grid-column: 2;
      text-align: left !important;
      margin-top: 0 !important;
    }

    .repair-visual {
      grid-column: 1;
      grid-row: 1 / span 2;
      align-self: center;
      border-radius: 10px;
    }

    .repair-card:hover .repair-image { transform: none; }

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
      grid-template-columns: 80px minmax(0, 1fr) !important;
    }

    .repair-price-block {
      grid-column: 2;
      text-align: left !important;
      margin-top: 8px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .repair-image { transition: none !important; transform: none !important; }
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
  gridAutoRows: "1fr",
  gap: "16px",
};

const card = {
  background: "rgba(255,255,255,0.045)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "22px",
  padding: "28px",
};

const cardTitle = {
  fontSize: "18px",
  margin: "16px 0",
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
