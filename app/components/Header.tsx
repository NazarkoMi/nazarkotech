export default function Header() {
  return (
    <header style={header}>
      <div style={nav}>
        <a href="/" style={logo}>
          Nazarko<span style={{ color: "#D4AF37" }}>Tech</span>
        </a>

        <nav style={navButtons} className="desktop-nav">
          <a href="/price" style={contactBtn}>Ціни</a>
          <a href="/works" style={contactBtn}>Роботи</a>
          <a href="/warranty" style={contactBtn}>Гарантія</a>
          <a href="/about" style={contactBtn}>Про нас</a>
          <a href="/contacts" style={contactBtn}>Контакти</a>
        </nav>

        <a href="https://t.me/NazarkoMi" style={telegramBtn}>
          Telegram
        </a>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}

const header = {
  position: "sticky" as const,
  top: 0,
  zIndex: 1000,
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  background: "rgba(5,5,5,0.72)",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  padding: "14px 24px",
};

const nav = {
  maxWidth: "1180px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "auto 1fr auto",
  alignItems: "center",
  gap: "22px",
};

const logo = {
  color: "white",
  textDecoration: "none",
  fontSize: "22px",
  fontWeight: "bold",
  whiteSpace: "nowrap" as const,
};

const navButtons = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "18px",
  minWidth: 0,
};

const contactBtn = {
  color: "white",
  textDecoration: "none",
  fontSize: "14px",
  whiteSpace: "nowrap" as const,
};

const telegramBtn = {
  background: "#D4AF37",
  color: "black",
  padding: "10px 18px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "13px",
  whiteSpace: "nowrap" as const,
};