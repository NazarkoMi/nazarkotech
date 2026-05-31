const faq = [
  {
    q: "Скільки триває ремонт?",
    a: "Більшість ремонтів виконується протягом одного дня. Точний час залежить від моделі пристрою та складності несправності.",
  },
  {
    q: "Чи є гарантія на ремонт?",
    a: "Так, на всі виконані роботи та встановлені комплектуючі надається гарантія.",
  },
  {
    q: "Чи використовуєте оригінальні деталі?",
    a: "Так. Для iPhone доступні оригінальні комплектуючі, а також якісні OLED аналоги.",
  },
  {
    q: "Чи можна відремонтувати пристрій в день звернення?",
    a: "Так, багато ремонтів виконуються протягом 1–3 годин за наявності необхідних деталей.",
  },
  {
    q: "Чи робите діагностику?",
    a: "Так, діагностика проводиться безкоштовно.",
  },
  {
    q: "У яких містах працюєте?",
    a: "NazarkoTech працює у Львові та Нововолинську.",
  },
];

export default function FAQ() {
  return (
    <section style={section}>
      <h2 style={title}>Часті запитання</h2>

      <div style={grid}>
        {faq.map((item) => (
          <div key={item.q} style={card}>
            <h3 style={question}>{item.q}</h3>
            <p style={answer}>{item.a}</p>
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
  gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
  gap: "18px",
};

const card = {
  background: "rgba(255,255,255,0.045)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "24px",
  padding: "24px",
};

const question = {
  fontSize: "20px",
  marginBottom: "12px",
};

const answer = {
  color: "#A3A3A3",
  lineHeight: "1.6",
};