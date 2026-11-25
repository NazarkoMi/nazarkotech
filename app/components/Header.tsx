import Link from "next/link";

export default function Header() {
  return (
    <header style={header} className="site-header">
      <div style={nav} className="site-header-inner">
        <Link href="/" style={logo} className="site-logo">
          Nazarko<span style={{ color: "#D4AF37" }}>Tech</span>
        </Link>

        <nav style={navButtons} className="desktop-nav">
          <Link href="/price" style={contactBtn}>Ціни</Link>
          <Link href="/shop" style={shopBtn}>Магазин</Link>
          <Link href="/works" style={contactBtn}>Роботи</Link>
          <Link href="/warranty" style={contactBtn}>Гарантія</Link>
          <Link href="/about" style={contactBtn}>Про нас</Link>
          <Link href="/contacts" style={contactBtn}>Контакти</Link>
        </nav>

        <Link href="/shop" style={shopBtn} className="mobile-shop-link">Магазин</Link>

        <a href="https://t.me/NazarkoMi" style={telegramBtn} className="site-telegram">
          Telegram
        </a>
      </div>

      <style>{`
        .mobile-shop-link { display: none; }
        @media (max-width: 1020px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-shop-link { display: inline-flex; justify-self: center; }
          .site-header-inner { gap: 14px !important; }
        }
        @media (max-width: 480px) {
          .site-header { padding: 12px 14px !important; }
          .site-header-inner { gap: 8px !important; }
          .site-logo { font-size: 19px !important; }
          .site-telegram { padding: 9px 10px !important; font-size: 12px !important; }
          .mobile-shop-link { font-size: 12px !important; }
        }
        @media (max-width: 340px) {
          .site-logo { font-size: 17px !important; }
          .site-header { padding-inline: 10px !important; }
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

const shopBtn = {
  ...contactBtn,
  color: "#D4AF37",
  fontWeight: 700,
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
