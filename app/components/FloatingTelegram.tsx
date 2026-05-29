export default function FloatingTelegram() {
  return (
    <a
      href="https://t.me/NazarkoMi"
      target="_blank"
      style={button}
      aria-label="Написати в Telegram"
    >
      💬
    </a>
  );
}

const button = {
  position: "fixed" as const,
  right: "22px",
  bottom: "22px",
  zIndex: 9999,
  width: "58px",
  height: "58px",
  borderRadius: "50%",
  background: "#D4AF37",
  color: "black",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  fontSize: "24px",
  boxShadow: "0 16px 45px rgba(212,175,55,0.35)",
};