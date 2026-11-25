import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Headphones, Laptop, Send, ShoppingBag, Smartphone, Watch } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const shopUrl = "https://t.me/MaxNaz_Apple";

export const metadata: Metadata = {
  title: "Магазин техніки MaxNaz | NazarkoTech",
  description: "MaxNaz — iPhone, Android, ноутбуки, смартгодинники та навушники. Актуальні пропозиції, ціни та замовлення в Telegram.",
  alternates: { canonical: "/shop" },
};

const categories = [
  { title: "Смартфони", text: "iPhone, Android та актуальні моделі.", icon: Smartphone },
  { title: "Ноутбуки", text: "Техніка для роботи, навчання та щоденних завдань.", icon: Laptop },
  { title: "Смартгодинники", text: "Сучасні годинники та розумні аксесуари.", icon: Watch },
  { title: "Навушники", text: "Бездротові навушники та інша аудіотехніка.", icon: Headphones },
];

export default function ShopPage() {
  return (
    <main className="shop-page">
      <Header />
      <div className="shop-content">
        <Link href="/" className="shop-back">← На головну</Link>

        <section className="shop-hero">
          <div className="shop-intro">
            <span className="shop-eyebrow"><ShoppingBag size={15} aria-hidden="true" /> Продаж техніки</span>
            <h1>Магазин <span>MaxNaz</span></h1>
            <p className="shop-lead">iPhone, Android та інша сучасна техніка. Актуальні моделі, перевірені пристрої та вигідні пропозиції.</p>
            <p className="shop-description">Переглядай наявність, актуальні ціни та нові пропозиції в нашому Telegram-магазині.</p>

            <a href={shopUrl} target="_blank" rel="noopener noreferrer" className="shop-primary">
              <Send size={20} aria-hidden="true" /> Перейти до магазину в Telegram <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <span className="shop-handle">@MaxNaz_Apple</span>
          </div>

          <div className="shop-brand">
            <div className="shop-brand-glow" />
            <Image src="/maxnaz-logo.webp" alt="Логотип MaxNaz" width={320} height={320} priority className="shop-logo" />
            <div className="shop-brand-caption">MaxNaz · Магазин сучасної техніки</div>
          </div>
        </section>

        <section className="shop-categories">
          <h2>Що можна придбати</h2>
          <div className="shop-grid">
            {categories.map(({ title, text, icon: Icon }) => (
              <article key={title} className="shop-card">
                <div className="shop-card-icon"><Icon size={29} strokeWidth={1.7} aria-hidden="true" /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="shop-contact">
          <div>
            <h2>Є питання щодо покупки чи викупу?</h2>
            <p>Напиши напряму в Telegram — уточнимо наявність, ціну та деталі замовлення.</p>
          </div>
          <div className="shop-contact-actions">
            <a href="https://t.me/bulich223" target="_blank" rel="noopener noreferrer" className="shop-secondary">Для покупок <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a href="https://t.me/NazarkoMi" target="_blank" rel="noopener noreferrer" className="shop-secondary">Для викупу <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </section>
      </div>
      <Footer />
      <style>{`
        .shop-page { min-height: 100vh; color: #f5f5f5; background: radial-gradient(ellipse at 80% 18%, rgba(66,184,91,.10),transparent 35%), #050505; font-family: Arial,sans-serif; }
        .shop-content { max-width: 1180px; margin: 0 auto; padding: 30px 24px 70px; }
        .shop-back { display: inline-flex; color: #d4af37; font-size: 14px; margin: 0 0 30px; text-decoration: none; }
        .shop-hero { display: grid; grid-template-columns: minmax(0,1.25fr) minmax(0,.85fr); align-items: center; gap: 40px; padding: 44px 42px; border: 1px solid rgba(212,175,55,.22); border-radius: 30px; background: radial-gradient(ellipse at 90% 45%, rgba(62,194,89,.12),transparent 58%), rgba(255,255,255,.035); }
        .shop-eyebrow { display: inline-flex; align-items: center; gap: 8px; color: #d4af37; font-size: 14px; font-weight: 600; margin-bottom: 18px; }
        .shop-hero h1 { font-size: clamp(42px, 6vw, 68px); letter-spacing: -2px; line-height: 1.07; margin: 0 0 20px; font-weight: 700; }
        .shop-hero h1 span { color: #7bdc83; }
        .shop-lead { font-size: clamp(18px, 2.2vw, 23px); line-height: 1.5; margin: 0 0 16px; max-width: 600px; }
        .shop-description { color: #aaa; font-size: 16px; line-height: 1.65; margin: 0 0 25px; max-width: 560px; }
        .shop-primary, .shop-secondary { display: inline-flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none; font-weight: 700; border-radius: 14px; transition: transform .2s ease, box-shadow .2s ease; }
        .shop-primary { background: #d4af37; color: #050505; padding: 15px 19px; font-size: 15px; }
        .shop-primary:hover, .shop-secondary:hover { transform: translateY(-3px); box-shadow: 0 12px 35px rgba(212,175,55,.15); }
        .shop-handle { display: block; color: #9ca3a3; margin-top: 13px; font-size: 14px; }
        .shop-brand { position: relative; min-width: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 18px; }
        .shop-brand-glow { position: absolute; width: 85%; aspect-ratio: 1; border-radius: 50%; background: rgba(72,200,95,.15); filter: blur(65px); pointer-events: none; }
        .shop-logo { position: relative; width: min(100%, 290px); height: auto; border-radius: 50%; border: 1px solid rgba(119,220,126,.28); box-shadow: 0 18px 65px rgba(0,0,0,.42); }
        .shop-brand-caption { position: relative; color: #a1a1a1; font-size: 13px; text-align: center; }
        .shop-categories { padding: 52px 0 0; }
        .shop-categories h2, .shop-contact h2 { font-size: clamp(25px, 3.5vw, 34px); margin: 0 0 24px; font-weight: 600; }
        .shop-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 15px; grid-auto-rows: 1fr; }
        .shop-card { padding: 24px 20px; border-radius: 22px; background: rgba(255,255,255,.035); border: 1px solid rgba(255,255,255,.09); min-width: 0; }
        .shop-card-icon { display: grid; place-items: center; width: 58px; height: 58px; border-radius: 16px; color: #85de8b; background: rgba(75,193,92,.1); border: 1px solid rgba(75,193,92,.2); margin-bottom: 18px; }
        .shop-card h3 { margin: 0 0 10px; font-size: 19px; font-weight: 600; }
        .shop-card p, .shop-contact p { margin: 0; color: #aaa; line-height: 1.6; font-size: 15px; }
        .shop-contact { display: flex; align-items: center; justify-content: space-between; gap: 26px; padding: 32px; margin-top: 42px; border-radius: 24px; background: rgba(212,175,55,.065); border: 1px solid rgba(212,175,55,.17); }
        .shop-contact h2 { font-size: 25px; margin-bottom: 12px; }
        .shop-contact-actions { display: flex; flex-wrap: wrap; gap: 10px; flex-shrink: 0; }
        .shop-secondary { color: #e8e8e8; padding: 13px 15px; font-size: 14px; border: 1px solid rgba(212,175,55,.35); }
        .shop-primary:focus-visible, .shop-secondary:focus-visible { outline: 2px solid #d4af37; outline-offset: 4px; }
        @media (max-width: 800px) { .shop-hero { grid-template-columns: 1fr; padding: 30px 24px; gap: 28px; } .shop-logo { width: 205px; } .shop-grid { grid-template-columns: repeat(2,minmax(0,1fr)); } .shop-contact { flex-direction: column; align-items: flex-start; } }
        @media (max-width: 460px) { .shop-content { padding: 24px 16px 55px; } .shop-hero { padding: 24px 20px; border-radius: 24px; } .shop-primary { width: 100%; font-size: 13px; padding: 14px 10px; gap: 7px; } .shop-card { padding: 17px 14px; } .shop-card h3 { font-size: 16px; } .shop-card p { font-size: 13px; } .shop-contact { padding: 23px 18px; } .shop-contact-actions { flex-shrink: 1; } }
        @media (prefers-reduced-motion: reduce) { .shop-primary,.shop-secondary { transition: none; transform: none !important; } }
      `}</style>
    </main>
  );
}
