import Link from "next/link";

type PhoneStyle = {
  color: string;
  edge: string;
  camera: "vertical" | "single" | "dual" | "diagonal" | "triple" | "pill" | "plateau" | "air";
  size?: "mini" | "max";
};

function getPhoneStyle(slug: string): PhoneStyle {
  const mini = slug.includes("mini");
  const max = slug.includes("max") || slug.includes("plus");
  const size = mini ? "mini" : max ? "max" : undefined;
  const pro = slug.includes("pro");
  if (slug === "android") return { color: "#85a9a0", edge: "#48675f", camera: "triple" };
  if (slug === "iphone-xr") return { color: "#78b4d8", edge: "#427d9e", camera: "single" };
  if (/iphone-x(s|-|$)/.test(slug)) return { color: "#d6c0aa", edge: "#8d7560", camera: "vertical", size };
  if (slug.startsWith("iphone-11")) return { color: pro ? "#809188" : "#b4c7a5", edge: "#52675c", camera: pro ? "triple" : "dual", size };
  if (slug.startsWith("iphone-12")) return { color: pro ? "#6f92a8" : "#7892c0", edge: "#3b586f", camera: pro ? "triple" : "dual", size };
  if (slug.startsWith("iphone-13")) return { color: pro ? "#a7bccb" : "#d5b3bb", edge: "#72869a", camera: pro ? "triple" : "diagonal", size };
  if (slug.startsWith("iphone-14")) return { color: pro ? "#80738b" : "#c8c3e2", edge: "#595067", camera: pro ? "triple" : "diagonal", size };
  if (slug.startsWith("iphone-15")) return { color: pro ? "#c2b9a9" : "#a5c6c7", edge: "#726a5e", camera: pro ? "triple" : "diagonal", size };
  if (slug.startsWith("iphone-16")) return { color: pro ? "#d6b395" : "#8f9bd1", edge: "#7b6351", camera: pro ? "triple" : "pill", size };
  if (slug === "iphone-17-air") return { color: "#c2cbd1", edge: "#7c858b", camera: "air" };
  if (slug.startsWith("iphone-17")) return { color: pro ? "#d78c53" : "#b3c4ae", edge: pro ? "#9c5b34" : "#738a73", camera: pro ? "plateau" : "pill", size };
  return { color: "#adbac5", edge: "#596775", camera: "dual", size };
}

function PhoneBack({ slug }: { slug: string }) {
  const { color, edge, camera, size } = getPhoneStyle(slug);
  const w = size === "mini" ? 64 : size === "max" ? 79 : 71;
  const h = size === "mini" ? 121 : size === "max" ? 146 : 135;
  const x = (120 - w) / 2;
  const y = (160 - h) / 2;
  const cx = x + 9;
  const cy = y + 9;
  const triple = camera === "triple" || camera === "plateau";
  const wide = camera === "plateau" || camera === "air";
  const compact = camera === "vertical" || camera === "pill";
  const single = camera === "single" || camera === "air";
  const cameraWidth = wide ? w - 18 : single ? 20 : compact ? 21 : 37;
  const cameraHeight = camera === "air" ? 22 : single ? 22 : compact ? 38 : 37;
  const lenses = single ? [[cx + 10, cy + 10]] : triple ? [[cx + 10, cy + 10], [cx + 10, cy + 26], [cx + 25, cy + 18]] : camera === "diagonal" ? [[cx + 10, cy + 10], [cx + 26, cy + 26]] : [[cx + 10, cy + 10], [cx + 10, cy + 27]];
  const id = `phone-${slug}`;

  return (
    <svg viewBox="0 0 120 160" className="phone-back" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${id}-body`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor={color} />
          <stop offset="0.65" stopColor={color} />
          <stop offset="1" stopColor={edge} />
        </linearGradient>
        <radialGradient id={`${id}-lens`} cx="36%" cy="30%" r="64%">
          <stop stopColor="#657c95" />
          <stop offset="0.35" stopColor="#1b293e" />
          <stop offset="1" stopColor="#05080e" />
        </radialGradient>
      </defs>
      <ellipse cx="60" cy="153" rx={w / 2 + 5} ry="5" fill="#000" opacity=".5" />
      <rect x={x - 1} y={y + 27} width="3" height="18" rx="1.5" fill={edge} />
      <rect x={x + w - 1} y={y + 35} width="3" height="18" rx="1.5" fill={edge} />
      <rect x={x} y={y} width={w} height={h} rx="11" fill={edge} stroke="#dcdcdc" strokeOpacity=".3" />
      <rect x={x + 2} y={y + 2} width={w - 4} height={h - 4} rx="9" fill={`url(#${id}-body)`} />
      <rect x={cx} y={cy} width={cameraWidth} height={cameraHeight} rx={compact ? 10 : 8} fill={edge} stroke={color} strokeWidth="1" />
      {lenses.map(([lx, ly], index) => (
        <g key={index}>
          <circle cx={lx} cy={ly} r="7.3" fill="#252b30" stroke={color} strokeWidth=".9" />
          <circle cx={lx} cy={ly} r="5.4" fill={`url(#${id}-lens)`} />
          <circle cx={lx - 1.8} cy={ly - 2} r="1.25" fill="#a5bdd1" opacity=".55" />
        </g>
      ))}
      {!compact && !single && <circle cx={cx + 26} cy={cy + 7} r="2.9" fill="#f5e3b1" />}
      {wide && <circle cx={cx + cameraWidth - 8} cy={cy + 9} r="2.6" fill="#f5e3b1" />}
      {triple && <circle cx={cx + 26} cy={cy + 30} r="2.3" fill="#33383c" />}
      {slug !== "android" && <path d="M60 80c-4-4-10 0-8 7 1 4 4 7 7 6 2-1 3-1 5 0 3 1 6-4 7-7-5-2-5-6-2-8-3-2-6-1-9 2m1-3c0-3 3-5 5-5 0 3-2 5-5 5" fill="#fff" opacity=".28" />}
      {slug === "android" && <path d="M54 85h12m-10 0-2 5m10-5 2 5" stroke="#fff" strokeOpacity=".38" strokeWidth="1.5" strokeLinecap="round" />}
    </svg>
  );
}

const models = [
  { name: "🤖 Android", slug: "android" },

  { name: "iPhone X", slug: "iphone-x" },
  { name: "iPhone XR", slug: "iphone-xr" },
  { name: "iPhone XS", slug: "iphone-xs" },
  { name: "iPhone XS Max", slug: "iphone-xs-max" },

  { name: "iPhone 11", slug: "iphone-11" },
  { name: "iPhone 11 Pro", slug: "iphone-11-pro" },
  { name: "iPhone 11 Pro Max", slug: "iphone-11-pro-max" },

  { name: "iPhone 12 mini", slug: "iphone-12-mini" },
  { name: "iPhone 12", slug: "iphone-12" },
  { name: "iPhone 12 Pro", slug: "iphone-12-pro" },
  { name: "iPhone 12 Pro Max", slug: "iphone-12-pro-max" },

  { name: "iPhone 13 mini", slug: "iphone-13-mini" },
  { name: "iPhone 13", slug: "iphone-13" },
  { name: "iPhone 13 Pro", slug: "iphone-13-pro" },
  { name: "iPhone 13 Pro Max", slug: "iphone-13-pro-max" },

  { name: "iPhone 14", slug: "iphone-14" },
  { name: "iPhone 14 Plus", slug: "iphone-14-plus" },
  { name: "iPhone 14 Pro", slug: "iphone-14-pro" },
  { name: "iPhone 14 Pro Max", slug: "iphone-14-pro-max" },

  { name: "iPhone 15", slug: "iphone-15" },
  { name: "iPhone 15 Plus", slug: "iphone-15-plus" },
  { name: "iPhone 15 Pro", slug: "iphone-15-pro" },
  { name: "iPhone 15 Pro Max", slug: "iphone-15-pro-max" },

  { name: "iPhone 16", slug: "iphone-16" },
  { name: "iPhone 16 Plus", slug: "iphone-16-plus" },
  { name: "iPhone 16 Pro", slug: "iphone-16-pro" },
  { name: "iPhone 16 Pro Max", slug: "iphone-16-pro-max" },

  { name: "iPhone 17", slug: "iphone-17" },
  { name: "iPhone 17 Air", slug: "iphone-17-air" },
  { name: "iPhone 17 Pro", slug: "iphone-17-pro" },
  { name: "iPhone 17 Pro Max", slug: "iphone-17-pro-max" },
];

export default function ModelsGrid() {
  return (
    <section id="iphone-models" style={section}>
      <h2 style={sectionTitle}>Обери свою модель</h2>

      <p style={sectionDesc}>
        Оберіть модель пристрою, щоб переглянути актуальні ціни на ремонт та доступні послуги.
      </p>

      <div style={modelGrid}>
        {models.map((model) => (
          <Link
            key={model.slug}
            href={`/remont-iphone/${model.slug}`}
            style={modelCard}
            className="phone-model-card"
          >
            <div className="phone-model-visual"><PhoneBack slug={model.slug} /></div>
            <span className="phone-model-name">{model.name.replace("🤖 ", "")}</span>
            <span className="phone-model-action">Ціни на ремонт <span aria-hidden="true">→</span></span>
          </Link>
        ))}
      </div>
      <style>{`
        .phone-model-card { min-width: 0; text-align: center; overflow: hidden; }
        .phone-model-card:hover, .phone-model-card:focus-visible {
          transform: translateY(-4px); border-color: #d4af37 !important;
          box-shadow: 0 12px 32px rgba(212,175,55,.14) !important;
        }
        .phone-model-card:focus-visible { outline: 2px solid #e5c65c; outline-offset: 3px; }
        .phone-model-visual { background: radial-gradient(ellipse at 50% 70%, rgba(212,175,55,.12), transparent 68%); border-radius: 12px; display: grid; place-items: center; height: 142px; }
        .phone-back { width: min(100%, 108px); height: 134px; transition: transform .25s ease; }
        .phone-model-card:hover .phone-back { transform: translateY(-3px) scale(1.045); }
        .phone-model-name { display: block; font-size: 15px; line-height: 1.3; font-weight: 700; margin: 10px 0 7px; }
        .phone-model-action { display: block; color: #c9ac58; font-size: 11px; font-weight: 600; }
        @media (max-width: 480px) {
          .phone-model-card { padding: 9px !important; }
          .phone-model-visual { height: 108px; }
          .phone-back { height: 104px; }
          .phone-model-name { font-size: 13px; }
          .phone-model-action { font-size: 10px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .phone-model-card, .phone-back { transition: none !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
}

const section = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "45px 24px",
  scrollMarginTop: "90px",
};

const sectionTitle = {
  fontSize: "34px",
  marginBottom: "18px",
};

const sectionDesc = {
  color: "#A3A3A3",
  marginBottom: "26px",
  fontSize: "16px",
};

const modelGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(136px, 100%), 1fr))",
  gap: "12px",
};

const modelCard = {
  display: "block",
  background: "rgba(255,255,255,0.045)",
  border: "1px solid rgba(255,255,255,0.1)",
  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  borderRadius: "20px",
  padding: "12px",
  color: "#F5F5F5",
  textDecoration: "none",
  fontSize: "14px",
  transition: "all 0.25s ease",
  cursor: "pointer",
};
