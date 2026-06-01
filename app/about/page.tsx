export default function AboutPage() {
  return (
    <main style={page}>
      <div style={container}>
        <h1 style={title}>Про NazarkoTech</h1>

        <p style={text}>
          NazarkoTech — сервіс з ремонту та обслуговування iPhone, Android,
          ноутбуків, ПК та ігрових консолей у Львові та Нововолинську.
        </p>

        <p style={text}>
          Ми виконуємо заміну екранів, акумуляторів, камер, корпусів,
          переклейку скла, чистку після потрапляння вологи, модернізацію
          ноутбуків та персональних комп'ютерів.
        </p>

        <p style={text}>
          Для кожного клієнта доступна безкоштовна діагностика перед ремонтом.
          Ми допомагаємо підібрати оптимальне рішення залежно від бюджету та
          стану пристрою.
        </p>

        <p style={text}>
          Працюємо з якісними комплектуючими та надаємо гарантію на виконані
          роботи.
        </p>

        <div style={stats}>
          <div style={statCard}>
            <h3>🔧</h3>
            <p>Безкоштовна діагностика</p>
          </div>

          <div style={statCard}>
            <h3>📱</h3>
            <p>Ремонт смартфонів</p>
          </div>

          <div style={statCard}>
            <h3>💻</h3>
            <p>Ноутбуки та ПК</p>
          </div>

          <div style={statCard}>
            <h3>🎮</h3>
            <p>Консолі PlayStation та Xbox</p>
          </div>
        </div>
      </div>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background: "#050505",
  color: "white",
};

const container = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "100px 24px",
};

const title = {
  fontSize: "56px",
  marginBottom: "30px",
};

const text = {
  fontSize: "18px",
  lineHeight: "1.8",
  color: "#B0B0B0",
  marginBottom: "24px",
};

const stats = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "20px",
  marginTop: "50px",
};

const statCard = {
  padding: "24px",
  borderRadius: "20px",
  border: "1px solid rgba(212,175,55,0.2)",
  background: "rgba(212,175,55,0.05)",
  textAlign: "center" as const,
};