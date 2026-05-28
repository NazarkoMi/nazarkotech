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
  zIndex: 10,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "18px 32px",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(5,5,5,0.78)",
  backdropFilter: "blur(16px)",
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