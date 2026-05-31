export default function BatteryInfo() {
  return (
    <section style={wrap}>
      <h2 style={title}>
        Що буде відображатись у налаштуваннях iPhone?
      </h2>

      <div style={grid}>
        <div style={card}>
          <div style={emoji}>🔋</div>

          <h3 style={cardTitle}>Невідома деталь</h3>

          <p style={text}>
            Найдоступніший варіант заміни акумулятора.
            У налаштуваннях iPhone буде показуватись повідомлення
            «Невідома деталь».
          </p>

          <img
            src="/battery/unknown.jpg"
            alt="Невідома деталь"
            style={image}
          />
        </div>

        <div style={card}>
          <div style={emoji}>♻️</div>

          <h3 style={cardTitle}>Вживана деталь 100%</h3>

          <p style={text}>
            Оригінальна батарея Apple з прив'язкою.
            У налаштуваннях буде показуватись
            «Вживана деталь», стан акумулятора 100%.
          </p>

          <img
            src="/battery/used.jpg"
            alt="Вживана деталь"
            style={image}
          />
        </div>

        <div style={card}>
          <div style={emoji}>🍏</div>

          <h3 style={cardTitle}>Нова оригінальна деталь 100%</h3>

          <p style={text}>
            Нова оригінальна батарея Apple з прив'язкою.
            У налаштуваннях відображається
            «Оригінальна деталь», стан 100%.
          </p>

          <img
            src="/battery/new.jpg"
            alt="Нова оригінальна деталь"
            style={image}
          />
        </div>
      </div>
    </section>
  );
}

const wrap = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "30px 24px",
};

const title = {
  fontSize: "34px",
  marginBottom: "24px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
  gap: "18px",
};

const card = {
  background: "rgba(255,255,255,0.045)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "24px",
  padding: "22px",
};

const emoji = {
  fontSize: "38px",
};

const cardTitle = {
  fontSize: "22px",
  marginTop: "14px",
};

const text = {
  color: "#A3A3A3",
  lineHeight: "1.6",
};

const image = {
  width: "100%",
  borderRadius: "16px",
  marginTop: "18px",
};