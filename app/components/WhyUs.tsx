import { SearchCheck, ShieldCheck, Zap, Gem, MapPin, MessageCircle } from "lucide-react";

const items = [
  {
    icon: SearchCheck,
    title: "Безкоштовна діагностика",
    text: "Для смартфонів, ПК та ноутбуків. Діагностика консолей — 399 грн.",
  },
  {
    icon: ShieldCheck,
    title: "Гарантія на ремонт",
    text: "Надаємо гарантію на виконані роботи.",
  },
  {
    icon: Zap,
    title: "Швидке виконання",
    text: "Більшість ремонтів виконуємо протягом одного дня.",
  },
  {
    icon: Gem,
    title: "Якісні комплектуючі",
    text: "Використовуємо перевірені запчастини.",
  },
  {
    icon: MapPin,
    title: "Працюємо у Львові",
    text: "Зручний сервіс для клієнтів зі Львова та області.",
  },
  {
    icon: MessageCircle,
    title: "Telegram та Viber",
    text: "Швидкий зв'язок та консультація онлайн.",
  },
];

export default function WhyUs() {
  return (
    <section style={section}>
      <h2 style={title}>Чому обирають NazarkoTech</h2>

      <div style={grid} className="why-benefit-grid">
        {items.map((item) => {
          const Icon = item.icon;
          return (
          <div key={item.title} style={card} className="why-card">
            <div style={icon}><Icon size={29} strokeWidth={1.65} aria-hidden="true" /></div>

            <h3 style={cardTitle}>{item.title}</h3>

            <p style={text}>{item.text}</p>
          </div>
          );
        })}
      </div>
      <style>{`
        .why-card { min-width: 0; height: 100%; }
        @media (max-width: 800px) { .why-benefit-grid { grid-template-columns: repeat(2, minmax(0,1fr)) !important; } }
        @media (max-width: 540px) { .why-card { padding: 18px !important; } }
        @media (max-width: 350px) { .why-benefit-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

const section = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "45px 24px",
};

const title = {
  fontSize: "34px",
  marginBottom: "24px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gridAutoRows: "1fr",
  gap: "16px",
};

const card = {
  background: "rgba(255,255,255,0.045)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "22px",
  padding: "24px",
};

const icon = {
  width: "58px",
  height: "58px",
  borderRadius: "16px",
  display: "grid",
  placeItems: "center",
  color: "#e4c35b",
  background: "linear-gradient(145deg, rgba(212,175,55,.16), rgba(212,175,55,.045))",
  border: "1px solid rgba(212,175,55,.25)",
  marginBottom: "20px",
};

const cardTitle = {
  fontSize: "20px",
  fontWeight: 600,
  margin: "0 0 10px",
};

const text = {
  color: "#A3A3A3",
  lineHeight: "1.6",
  margin: 0,
};
