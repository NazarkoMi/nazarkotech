import Link from "next/link";
import Header from "./components/Header";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-bold">Сторінку не знайдено</h1>
        <p className="mt-4 text-[#bcbcbc]">Обери пристрій у каталозі, щоб переглянути ціни на ремонт.</p>
        <Link
          href="/#iphone-models"
          className="mt-6 inline-flex rounded-xl bg-[#d4af37] px-4 py-3 font-bold text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4af37]"
        >
          Перейти до каталогу моделей
        </Link>
      </section>
    </main>
  );
}
