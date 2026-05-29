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
            Якісний ремонт iPhone, Android, ноутбуків, ПК, PlayStation та Xbox. Безкоштовна діагностика, чесні ціни та швидке виконання робіт.
            Заміна екрану на оригінал або аналог, акумулятора,
            заднього скла, корпусу, камер та інших компонентів,
            а також переклейка екранів за приємною ціною.
          </p>

          <div style={buttonRow}>
            <a
              href="tel:+380686293605"
              style={goldButton}
              className="btn"
            >
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

        <div style={phoneArea}>
          <div style={glow} />

          <div style={phone}>
            <div style={phoneInner}>
              <div style={island} />

              <p style={phoneMiniText}>NAZARKOTECH</p>

              <h2 style={phoneTitle}>
                iPhone
                <br />
                Service
              </h2>

              <div style={goldLine} />

              <p style={phoneDesc}>
                Premium black & gold repair experience
              </p>
            </div>
          </div>
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

const phoneArea = {
  position: "relative" as const,
  display: "flex",
  justifyContent: "center",
};

const glow = {
  position: "absolute" as const,
  width: "280px",
  height: "280px",
  borderRadius: "50%",
  background: "rgba(212,175,55,0.22)",
  filter: "blur(90px)",
};

const phone = {
  position: "relative" as const,
  width: "270px",
  height: "540px",
  borderRadius: "44px",
  background: "linear-gradient(145deg, #202020, #050505)",
  border: "1px solid rgba(255,255,255,0.16)",
  boxShadow: "0 50px 130px rgba(212,175,55,0.18)",
  padding: "14px",
};

const phoneInner = {
  height: "100%",
  borderRadius: "34px",
  background: "linear-gradient(180deg, #0b0b0b, #000)",
  border: "1px solid rgba(255,255,255,0.08)",
  padding: "24px",
  textAlign: "center" as const,
};

const island = {
  width: "82px",
  height: "22px",
  background: "#000",
  borderRadius: "999px",
  margin: "0 auto 100px",
};

const phoneMiniText = {
  color: "#D4AF37",
  letterSpacing: "4px",
  fontSize: "11px",
};

const phoneTitle = {
  fontSize: "34px",
  lineHeight: "1.08",
  margin: "18px 0 0",
};

const goldLine = {
  width: "56px",
  height: "3px",
  background: "#D4AF37",
  borderRadius: "999px",
  margin: "26px auto",
};

const phoneDesc = {
  color: "#777",
  fontSize: "13px",
  lineHeight: "1.6",
};