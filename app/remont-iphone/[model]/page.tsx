import type { Metadata } from "next";
import { iphoneRepairs } from "../../data/iphoneRepairs";
import Header from "../../components/Header";
import Link from "next/link";

type Props = {
  params: Promise<{
    model: string;
  }>;
};

const repairs = [
  { title: "Заміна скла", price: "від 1550 грн", time: "2–4 год" },
  { title: "Заміна акумулятора", price: "від 1190 грн", time: "1–2 год" },
  { title: "Заміна заднього скла", price: "від 1790 грн", time: "3–5 год" },
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

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const resolvedParams = await params;

  const modelData = iphoneRepairs[resolvedParams.model];

  const modelName =
    modelData?.name || formatModel(resolvedParams.model);

  return {
    title: `Ремонт ${modelName} у Львові | NazarkoTech.`,
    description: `Професійний ремонт ${modelName} у Львові. Заміна скла, акумулятора, заднього скла, камер та інших компонентів.`,
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
        <section style={hero}>
        <p style={eyebrow}>
          NazarkoTech. · Ремонт iPhone
        </p>

        <h1 style={title}>
          Ремонт {modelName}
        </h1>

        <p style={subtitle}>
          Заміна скла, акумулятора, заднього скла,
          камер та інших компонентів для {modelName}.
        </p>
      </section>

      <section style={section}>
        <h2 style={sectionTitle}>
          Популярні ремонти
        </h2>

        <div style={grid}>
          {repairsList.map((repair) => (
  <div
    key={repair.title}
    style={card}
    className="repair-card"
  >
    <div style={cardTop}>
  <span style={icon}>
    {repair.title.includes("екрана") && "📱"}
    {repair.title.includes("акумулятора") && "🔋"}
    {repair.title.includes("роз'єму") && "⚡"}
    {repair.title.includes("камери") && "📷"}
    {repair.title.includes("чистка") && "🧼"}
    {repair.title.includes("Діагностика") && "🛠️"}
    {repair.title.includes("скла") && "✨"}
  </span>

  <h3 style={cardTitle}>{repair.title}</h3>
</div>

    <p style={priceText}>{repair.price}</p>

    <p style={mutedText}>{repair.time}</p>
  </div>
))}

        </div>
      </section>

      <section style={cta}>
        <h2 style={ctaTitle}>
          Записатись на ремонт
        </h2>

        <p style={ctaText}>
          Напиши у Telegram або Viber,
          вкажи модель iPhone та проблему.
        </p>

        <div style={buttonRow}>
          <Link
            href="https://t.me/NazarkoMi"
            style={goldButton}
            className="btn"
          >
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
  fontSize: "58px",
  margin: "0 0 24px",
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
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "16px",
};

const card = {
  background: "rgba(255,255,255,0.045)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "22px",
  padding: "30px",
};

const cardTitle = {
  fontSize: "18px",
  marginBottom: "16px",
};

const priceText = {
  color: "#D4AF37",
  fontSize: "17px",
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
const mutedText = {
  color: "#777",
  marginTop: "10px",
  fontSize: "14px",
};
const cardTop = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "14px",
};

const icon = {
  fontSize: "22px",
};