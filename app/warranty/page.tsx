export default function WarrantyPage() {
  return (
    <main style={page}>
      <section style={container}>
        <h1 style={title}>Гарантія на ремонт</h1>

        <p style={text}>
          У NazarkoTech ми надаємо гарантію на виконані роботи та встановлені комплектуючі.
          Перед ремонтом проводиться діагностика, після чого клієнт отримує зрозуміле пояснення проблеми та вартості.
        </p>

        <div style={grid}>
          <div style={card}>
            <h2>🛡️ Гарантія на роботи</h2>
            <p>Після ремонту пристрій перевіряється, а клієнт отримує гарантію на виконану послугу.</p>
          </div>

          <div style={card}>
            <h2>💎 Якісні комплектуючі</h2>
            <p>Використовуємо оригінальні запчастини або якісні аналоги залежно від побажань клієнта.</p>
          </div>

          <div style={card}>
            <h2>🔍 Безкоштовна діагностика</h2>
            <p>Перед ремонтом визначаємо причину несправності та узгоджуємо всі деталі.</p>
          </div>

          <div style={card}>
            <h2>🤝 Чесний підхід</h2>
            <p>Не навʼязуємо зайвих послуг і пропонуємо оптимальний варіант ремонту під ваш бюджет.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background: "#050505",
  color: "white",
  fontFamily: "Arial, sans-serif",
};

const container = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "100px 24px",
};

const title = {
  fontSize: "56px",
  marginBottom: "26px",
};

const text = {
  color: "#A3A3A3",
  fontSize: "18px",
  lineHeight: "1.7",
  maxWidth: "850px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
  gap: "18px",
  marginTop: "40px",
};

const card = {
  background: "rgba(255,255,255,0.045)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "24px",
  padding: "24px",
};