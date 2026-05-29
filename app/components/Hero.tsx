export default function Hero() {
  return (
    <section style={heroWrap}>
      <div style={hero}>
        <div>
          <p style={eyebrow}>Service NazarkoTech · Львів та Нововолинськ</p>

          <h1 style={title}>
            Ремонт та обслуговування смартфонів, ПК, ноутбуків та консолей
          </h1>

          <p style={subtitle}>
            Якісний ремонт iPhone, Android, ноутбуків, ПК, PlayStation та Xbox.
            Безкоштовна діагностика, чесні ціни та швидке виконання робіт.
          </p>

          <div style={buttonRow}>
            <a href="tel:+380686293605" style={goldButton} className="btn">
              Подзвонити
            </a>

            <a
              href="viber://chat?number=%2B380686293605"
              style={darkButton}
              className="btn"
            >
              Viber
            </a>
          </div>
        </div>

        <div style={imageArea}>
          <div style={glow} />

          <img
            src="/hero-devices.png"
            alt="Ремонт смартфонів, ноутбуків, ПК та консолей"
            style={heroImage}
          />
        </div>
      </div>
    </section>
  );
}

const heroWrap = {
  padding: "70px 24px 40px",
};

const hero = {
  maxWidth: "1180px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "50px",
  alignItems: "center",
};

const eyebrow = {
  color: "#D4AF37",
  fontSize: "15px",
  marginBottom: "18px",
};

const title = {
  fontSize: "clamp(42px, 8vw, 68px)",
  lineHeight: "1.05",
  margin: "0 0 24px",
  maxWidth: "720px",
};

const subtitle = {
  fontSize: "clamp(16px, 2vw, 19px)",
  color: "#A3A3A3",
  lineHeight: "1.65",
  maxWidth: "700px",
};

const buttonRow = {
  display: "flex",
  gap: "14px",
  marginTop: "32px",
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

const imageArea = {
  position: "relative" as const,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const glow = {
  position: "absolute" as const,
  width: "360px",
  height: "360px",
  borderRadius: "50%",
  background: "rgba(212,175,55,0.22)",
  filter: "blur(100px)",
};

const heroImage = {
  position: "relative" as const,
  width: "100%",
  maxWidth: "650px",
  height: "auto",
  objectFit: "contain" as const,
  filter: "drop-shadow(0 35px 80px rgba(212,175,55,0.18))",
};