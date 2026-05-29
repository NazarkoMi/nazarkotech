const reviews = [
  {
    name: "Андрій",
    city: "Львів",
    text: "Швидко замінили екран на iPhone, все працює чудово. Дуже задоволений сервісом.",
  },
  {
    name: "Олег",
    city: "Нововолинськ",
    text: "Почистили PlayStation, стала набагато тихішою. Видно, що робота зроблена акуратно.",
  },
  {
    name: "Ірина",
    city: "Львів",
    text: "Встановили SSD у ноутбук і перевстановили Windows. Ноутбук почав працювати значно швидше.",
  },
  {
    name: "Максим",
    city: "Львів",
    text: "Допомогли з апгрейдом ігрового ПК. Пояснили, що краще замінити, без навʼязування зайвого.",
  },
];

export default function Reviews() {
  return (
    <section style={section}>
      <h2 style={title}>Відгуки клієнтів</h2>

      <p style={desc}>
        Клієнти звертаються до NazarkoTech за ремонтом смартфонів, ноутбуків,
        ПК та ігрових консолей.
      </p>

      <div style={grid}>
        {reviews.map((review) => (
          <div key={review.name} style={card} className="review-card">
            <div style={stars}>★★★★★</div>

            <p style={text}>“{review.text}”</p>

            <div style={author}>
              — {review.name}, {review.city}
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
  lineHeight: "1.6",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "16px",
};

const card = {
  background: "rgba(255,255,255,0.045)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "22px",
  padding: "24px",
};

const stars = {
  color: "#D4AF37",
  letterSpacing: "2px",
  marginBottom: "16px",
};

const text = {
  color: "#F5F5F5",
  lineHeight: "1.6",
};

const author = {
  color: "#A3A3A3",
  marginTop: "18px",
  fontSize: "14px",
};