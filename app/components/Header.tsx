export default function Header() {
  return (
    <header style={header}>
      <div style={logo}>
        Nazarko<span style={{ color: "#D4AF37" }}>Tech</span>
      </div>

      <a href="https://t.me/NazarkoMi" style={smallGoldButton} className="btn">
        Telegram
      </a>
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

  padding: "18px 24px",
};

const logo = {
  fontSize: "22px",
  fontWeight: "bold",
};

const smallGoldButton = {
  background: "#D4AF37",
  color: "black",
  padding: "10px 18px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "13px",
};
const nav = {
  maxWidth: "1180px",
  margin: "0 auto",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};