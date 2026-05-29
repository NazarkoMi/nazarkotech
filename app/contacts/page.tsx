import Header from "../components/Header";
import Link from "next/link";

export default function ContactsPage() {
  return (
    <main style={page}>
      <Header />

      <section style={hero}>
        <Link href="/" style={backButton}>
          ← На головну
        </Link>

        <p style={eyebrow}>NazarkoTech · Контакти</p>

        <h1 style={title}>Контакти</h1>

        <p style={subtitle}>
  Працюємо у Львові та Нововолинську. Зв'яжіться зі мною будь-яким зручним способом для консультації або запису на ремонт.
</p>
      </section>

      <section style={contactsWrap}>
        <div style={contactCard}>
          <h2 style={cardTitle}>📞 Телефон</h2>
          <a href="tel:+380686293605" style={link}>
            +380 68 629 36 05
          </a>
        </div>

        <div style={contactCard}>
          <h2 style={cardTitle}>💬 Telegram</h2>
          <a href="https://t.me/NazarkoMi" style={link}>
            @NazarkoMi
          </a>
        </div>

        <div style={contactCard}>
          <h2 style={cardTitle}>📷 Instagram</h2>
          <a
            href="https://instagram.com/23_nazarko_23"
            style={link}
          >
            @23_nazarko_23
          </a>
        </div>

        <div style={contactCard}>
  <h2 style={cardTitle}>📍 Міста обслуговування</h2>
  <p style={text}>
    Львів<br />
    Нововолинськ
  </p>
</div>
      </section>

      <section style={cta}>
        <h2 style={ctaTitle}>Потрібен ремонт?</h2>

        <p style={ctaText}>
          Напишіть у Telegram або Viber та коротко опишіть проблему.
        </p>

        <div style={buttons}>
          <a
            href="https://t.me/NazarkoMi"
            style={goldButton}
          >
            Telegram
          </a>

          <a
            href="viber://chat?number=%2B380686293605"
            style={darkButton}
          >
            Viber
          </a>
        </div>
      </section>
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
  padding: "40px 24px",
};

const backButton = {
  display: "inline-flex",
  marginBottom: "30px",
  color: "#D4AF37",
  textDecoration: "none",
};

const eyebrow = {
  color: "#D4AF37",
  marginBottom: "12px",
};

const title = {
  fontSize: "56px",
  margin: "0 0 20px",
};

const subtitle = {
  color: "#A3A3A3",
  maxWidth: "700px",
  lineHeight: "1.6",
};

const contactsWrap = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "0 24px 40px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "16px",
};

const contactCard = {
  background: "rgba(255,255,255,0.045)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "22px",
  padding: "24px",
};

const cardTitle = {
  marginBottom: "12px",
};

const link = {
  color: "#D4AF37",
  textDecoration: "none",
  fontSize: "18px",
};

const text = {
  color: "#A3A3A3",
};

const cta = {
  maxWidth: "1180px",
  margin: "40px auto 80px",
  padding: "40px 24px",
  borderRadius: "28px",
  background: "rgba(212,175,55,0.08)",
  border: "1px solid rgba(212,175,55,0.18)",
  textAlign: "center" as const,
};

const ctaTitle = {
  fontSize: "36px",
};

const ctaText = {
  color: "#A3A3A3",
};

const buttons = {
  display: "flex",
  justifyContent: "center",
  gap: "14px",
  marginTop: "20px",
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