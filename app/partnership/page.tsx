import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CopyPromo from "./CopyPromo";

const promoCode = "DAE26C";

export const metadata: Metadata = {
  title: "Партнерство з LinkCom — промокод | NazarkoTech",
  description: `Реферальний промокод LinkCom ${promoCode}. 500 грн на баланс за підключення нового абонента у Львові згідно з умовами акції.`,
  alternates: { canonical: "/partnership" },
};

export default function PartnershipPage() {
  return (
    <main className="partnership-page">
      <Header />
      <div className="partnership-content">
        <h1>Партнерство</h1>
        <section className="partnership-offer" aria-labelledby="linkcom-offer">
          <p className="partner-name">LinkCom · Інтернет-провайдер у Львові</p>
          <h2 id="linkcom-offer">500 грн на баланс</h2>
          <p>Бонус за підключення нового абонента за реферальним промокодом відповідно до умов акції.</p>
          <CopyPromo code={promoCode} />
          <p className="promo-caption">Залиши заявку та повідом промокод менеджеру під час оформлення підключення.</p>
          <a className="partner-apply" href="https://linkcom.lviv.ua/domashniy-internet/">
            Залишити заявку на сайті LinkCom
          </a>
        </section>
      </div>
      <Footer />
      <style>{`
        .partnership-page { min-height: 100vh; color: #f5f5f5; background: radial-gradient(ellipse at 80% 15%, rgba(212,175,55,.13), transparent 42%), #050505; font-family: Arial, sans-serif; }
        .partnership-content { max-width: 1180px; margin: 0 auto; padding: 58px 24px 72px; }
        .partnership-content h1 { font-size: clamp(38px, 7vw, 62px); line-height: 1.1; font-weight: 700; margin: 0 0 26px; }
        .partnership-offer { max-width: 760px; padding: clamp(22px, 5vw, 48px); border: 1px solid rgba(212,175,55,.28); border-radius: 26px; background: rgba(255,255,255,.04); }
        .partnership-offer h2 { margin: 12px 0; color: #e8c75e; font-size: clamp(32px, 6vw, 52px); font-weight: 700; line-height: 1.12; }
        .partnership-offer p { margin: 0; color: #bcbcbc; line-height: 1.6; }
        .partnership-offer .partner-name { font-weight: 600; color: #e5e5e5; }
        .promo-copy { margin-top: 26px; }
        .promo-code-row { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; }
        .promo-code-row code { font-size: 25px; font-weight: 700; letter-spacing: .11em; padding: 9px 16px; border-radius: 12px; border: 1px dashed rgba(212,175,55,.5); user-select: all; }
        .promo-code-row button { padding: 13px 16px; border-radius: 12px; background: #d4af37; color: #050505; font-weight: 700; cursor: pointer; }
        .promo-code-row button:focus-visible { outline: 2px solid #e8c75e; outline-offset: 4px; }
        .promo-status { min-height: 1.5em; display: block; margin-top: 6px; color: #e8c75e; font-size: 14px; }
        .partnership-offer .promo-caption { font-size: 14px; }
        .partner-apply { display: inline-block; margin-top: 20px; padding: 12px 16px; border: 1px solid rgba(212,175,55,.5); border-radius: 12px; color: #e8c75e; font-weight: 700; text-decoration: none; }
        .partner-apply:hover { background: rgba(212,175,55,.1); }
        .partner-apply:focus-visible { outline: 2px solid #e8c75e; outline-offset: 4px; }
      `}</style>
    </main>
  );
}
