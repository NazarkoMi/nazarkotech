const works = [
  {
    image: "/works/phone-repair.jpg",
    title: "Ремонт смартфонів",
    text: "Заміна плат, розʼємів, акумуляторів та інших компонентів.",
  },
  {
    image: "/works/samsung-board.jpg",
    title: "Робота з платами",
    text: "Акуратне розбирання та ремонт внутрішніх компонентів.",
  },
  {
    image: "/works/laptop-cleaning.jpg",
    title: "Чистка ноутбуків",
    text: "Профілактика системи охолодження та заміна термоінтерфейсів.",
  },
  {
    image: "/works/laptop-thermal.jpg",
    title: "Заміна термопасти",
    text: "Обслуговування процесора, відеочипа та системи охолодження.",
  },
  {
    image: "/works/pc-build.jpg",
    title: "Збірка ПК",
    text: "Акуратна збірка, апгрейд та підбір комплектуючих.",
  },
  {
    image: "/works/gaming-pc.jpg",
    title: "Ігрові системи",
    text: "Збірка та налаштування продуктивних ігрових ПК.",
  },
];

export default function OurWorks() {
  return (
    <section style={section}>
      <h2 style={title}>Наші роботи</h2>

      <p style={desc}>
        Приклади ремонту, обслуговування та збірки техніки NazarkoTech.
      </p>

      <div style={grid}>
        {works.map((work) => (
          <div key={work.title} style={card} className="work-card">
            <img src={work.image} alt={work.title} style={image} />

            <div style={content}>
              <h3 style={cardTitle}>{work.title}</h3>
              <p style={text}>{work.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const section = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "45px 24px",
};

const title = {
  fontSize: "34px",
  marginBottom: "14px",
};

const desc = {
  color: "#A3A3A3",
  marginBottom: "26px",
  fontSize: "16px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "18px",
};

const card = {
  overflow: "hidden",
  background: "rgba(255,255,255,0.045)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "24px",
};

const image = {
  width: "100%",
  height: "260px",
  objectFit: "cover" as const,
  display: "block",
};

const content = {
  padding: "22px",
};

const cardTitle = {
  fontSize: "20px",
  margin: "0 0 10px",
};

const text = {
  color: "#A3A3A3",
  lineHeight: "1.55",
  margin: 0,
};