import Link from "next/link";

export default function Footer() {
  return (
    <footer style={footer}>
      <div style={inner}>
        <div>
          <Link href="/" style={logo}>
            Nazarko<span style={{ color: "#D4AF37" }}>Tech</span>
          </Link>

          <p style={text}>
            Ремонт iPhone, Android, ноутбуків, ПК та ігрових консолей у Львові та Нововолинську.
          </p>
        </div>

        <div style={links}>
          <Link href="/about" style={link}>Про нас</Link>
          <Link href="/warranty" style={link}>Гарантія</Link>
          <Link href="/works" style={link}>Наші роботи</Link>
          <Link href="/price" style={link}>Ціни</Link>
          <Link href="/shop" style={link}>Магазин MaxNaz</Link>
          <Link href="/partnership" style={link}>Партнерство</Link>
          <Link href="/contacts" style={link}>Контакти</Link>
          <Link href="/privacy" style={link}>Політика конфіденційності</Link>
        </div>
      </div>

      <div style={bottom}>
        © 2026 NazarkoTech · Львів та Нововолинськ · +380686293605
      </div>
    </footer>
  );
}

const footer = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "45px 24px 28px",
  borderTop: "1px solid rgba(255,255,255,0.08)",
};

const inner = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "28px",
  alignItems: "start",
};

const logo = {
  color: "white",
  textDecoration: "none",
  fontSize: "24px",
  fontWeight: "bold",
};

const text = {
  color: "#A3A3A3",
  lineHeight: "1.6",
  maxWidth: "520px",
  marginTop: "14px",
};

const links = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: "14px",
  justifyContent: "flex-end",
};

const link = {
  color: "#A3A3A3",
  textDecoration: "none",
  fontSize: "14px",
};

const bottom = {
  color: "#777",
  marginTop: "30px",
  fontSize: "14px",
};
