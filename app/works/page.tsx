import Header from "../components/Header";
import Link from "next/link";

const works = [
  {
    image: "/works/phone-repair.jpg",
    title: "Ремонт смартфонів",
  },
  {
    image: "/works/samsung-board.jpg",
    title: "Робота з платами",
  },
  {
    image: "/works/laptop-cleaning.jpg",
    title: "Чистка ноутбуків",
  },
  {
    image: "/works/laptop-thermal.jpg",
    title: "Заміна термопасти",
  },
  {
    image: "/works/pc-build.jpg",
    title: "Збірка ПК",
  },
  {
    image: "/works/gaming-pc.jpg",
    title: "Ігровий ПК",
  },
];

export default function WorksPage() {
  return (
    <main style={page}>
      <Header />

      <section style={hero}>
        <Link href="/" style={backButton}>
          ← На головну
        </Link>

        <p style={eyebrow}>NazarkoTech · Наші роботи</p>

        <h1 style={title}>Приклади виконаних робіт</h1>

        <p style={subtitle}>
          Фото ремонтів смартфонів, ноутбуків, комп'ютерів та іншої техніки.
        </p>
      </section>

      <section style={gallery}>
        {works.map((work) => (
          <div key={work.title} style={card}>
            <img
              src={work.image}
              alt={work.title}
              style={image}
            />

            <div style={cardContent}>
              <h3 style={cardTitle}>{work.title}</h3>
            </div>
          </div>
        ))}
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
  color: "#D4AF37",
  textDecoration: "none",
};

const eyebrow = {
  color: "#D4AF37",
  marginTop: "20px",
};

const title = {
  fontSize: "clamp(38px,7vw,58px)",
  margin: "12px 0",
};

const subtitle = {
  color: "#A3A3A3",
};

const gallery = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "20px 24px 80px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
  gap: "20px",
};

const card = {
  overflow: "hidden",
  borderRadius: "24px",
  background: "rgba(255,255,255,0.045)",
  border: "1px solid rgba(255,255,255,0.1)",
};

const image = {
  width: "100%",
  height: "320px",
  objectFit: "cover" as const,
};

const cardContent = {
  padding: "18px",
};

const cardTitle = {
  margin: 0,
};