const items = [
  {
    icon: "🔍",
    title: "Безкоштовна діагностика",
    text: "Проводимо перевірку несправності перед ремонтом.",
  },
  {
    icon: "🛡️",
    title: "Гарантія на ремонт",
    text: "Надаємо гарантію на виконані роботи.",
  },
  {
    icon: "⚡",
    title: "Швидке виконання",
    text: "Більшість ремонтів виконуємо протягом одного дня.",
  },
  {
    icon: "💎",
    title: "Якісні комплектуючі",
    text: "Використовуємо перевірені запчастини.",
  },
  {
    icon: "📍",
    title: "Працюємо у Львові",
    text: "Зручний сервіс для клієнтів зі Львова та області.",
  },
  {
    icon: "📱",
    title: "Telegram та Viber",
    text: "Швидкий зв'язок та консультація онлайн.",
  },
];

export default function WhyUs() {
  return (
    <section style={section}>
      <h2 style={title}>Чому обирають NazarkoTech</h2>

      <div style={grid}>
        {items.map((item) => (
          <div key={item.title} style={card} className="why-card">
            <div style={icon}>{item.icon}</div>

            <h3 style={cardTitle}>{item.title}</h3>

            <p style={text}>{item.text}</p>
          </div>
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

const title = {
  fontSize: "34px",
  marginBottom: "24px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "16px",
};

const card = {
  background: "rgba(255,255,255,0.045)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "22px",
  padding: "24px",
};

const icon = {
  fontSize: "32px",
  marginBottom: "14px",
};

const cardTitle = {
  fontSize: "19px",
  marginBottom: "10px",
};

const text = {
  color: "#A3A3A3",
  lineHeight: "1.6",
};