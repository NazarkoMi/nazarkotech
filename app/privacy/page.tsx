export default function PrivacyPage() {
  return (
    <main style={page}>
      <div style={container}>
        <h1 style={title}>Політика конфіденційності</h1>

        <p style={text}>
          NazarkoTech поважає право користувачів на конфіденційність та
          захист персональних даних.
        </p>

        <h2 style={subtitle}>Яку інформацію ми можемо отримувати</h2>

        <p style={text}>
          При зверненні через телефон, Telegram, Viber або форму зв'язку
          користувач може добровільно надати ім'я, номер телефону,
          електронну пошту та іншу інформацію, необхідну для надання послуг.
        </p>

        <h2 style={subtitle}>Використання інформації</h2>

        <p style={text}>
          Надана інформація використовується виключно для консультацій,
          виконання ремонту, зв'язку з клієнтом та покращення якості сервісу.
        </p>

        <h2 style={subtitle}>Передача третім особам</h2>

        <p style={text}>
          NazarkoTech не продає та не передає персональні дані третім особам,
          за винятком випадків, передбачених законодавством України.
        </p>

        <h2 style={subtitle}>Контактна інформація</h2>

        <p style={text}>
          Телефон: +380686293605
          <br />
          Telegram: @NazarkoMi
          <br />
          Сайт: https://nazarko.tech
        </p>

        <p style={date}>
          Останнє оновлення: 01.06.2026
        </p>
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
  marginBottom: "40px",
};

const subtitle = {
  marginTop: "36px",
  marginBottom: "12px",
  fontSize: "28px",
};

const text = {
  color: "#A3A3A3",
  fontSize: "18px",
  lineHeight: "1.8",
};

const date = {
  marginTop: "50px",
  color: "#666",
};