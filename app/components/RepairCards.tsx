const repairs = [
  ["Заміна скла", "від 1550 грн", "2–4 год"],
  ["Заміна акумулятора", "від 1190 грн", "1–2 год"],
  ["Заміна заднього скла", "від 1790 грн", "3–5 год"],
  ["Діагностика", "безкоштовно", "15–30 хв"],
];

export default function RepairCards() {
  return (
    <section style={section}>
      <h2 style={sectionTitle}>Популярні ремонти</h2>

      <div style={repairGrid}>
        {repairs.map(([title, price, time]) => (
          <div
            key={title}
            style={card}
            className="repair-card"
          >
            <h3 style={cardTitle}>{title}</h3>

            <p style={priceText}>{price}</p>

            <p style={mutedText}>{time}</p>
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

const sectionTitle = {
  fontSize: "34px",
  marginBottom: "24px",
};

const repairGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "16px",
};

const card = {
  background: "rgba(255,255,255,0.045)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "22px",
  padding: "30px",
  boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
};

const cardTitle = {
  fontSize: "18px",
  marginBottom: "16px",
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