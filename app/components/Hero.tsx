import Image from "next/image";

export default function Hero() {
  return (
    <section className="home-hero">
      <div className="home-hero-copy">
        <p className="home-hero-location">Львів · Нововолинськ</p>
        <h1>Ремонт техніки</h1>
        <p className="home-hero-description">
          iPhone, Android, ноутбуки, ПК та ігрові консолі.
        </p>
        <div className="home-hero-actions">
          <a className="home-hero-primary" href="#repair-catalog">
            Обрати пристрій <span aria-hidden="true">↓</span>
          </a>
          <a className="home-hero-phone" href="tel:+380686293605">Подзвонити</a>
        </div>
      </div>
      <div className="home-hero-visual">
        <Image
          src="/hero-devices-v2.webp"
          alt=""
          width={1200}
          height={800}
          sizes="(max-width: 760px) 92vw, (max-width: 1180px) 53vw, 610px"
          preload
        />
      </div>
    </section>
  );
}
