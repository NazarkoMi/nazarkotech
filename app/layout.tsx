import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import FloatingTelegram from "./components/FloatingTelegram";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nazarko.tech"),

  title:
    "NazarkoTech — ремонт iPhone, Android, ноутбуків, ПК та консолей у Львові та Нововолинську",

  description:
    "Ремонт iPhone, Android, ноутбуків, ПК, PlayStation та Xbox. Безкоштовна діагностика. Львів та Нововолинськ.",

  keywords: [
    "NazarkoTech",
    "ремонт iPhone Львів",
    "ремонт Android Львів",
    "ремонт ноутбуків Львів",
    "ремонт ПК Львів",
    "ремонт PlayStation Львів",
    "ремонт Xbox Львів",
    "ремонт телефонів Нововолинськ",
    "ремонт ноутбуків Нововолинськ",
  ],

  authors: [{ name: "NazarkoTech" }],

  openGraph: {
    title: "NazarkoTech",
    description:
      "Ремонт iPhone, Android, ноутбуків, ПК та консолей у Львові та Нововолинську.",
    url: "https://nazarko.tech",
    siteName: "NazarkoTech",
    locale: "uk_UA",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  {children}
  <FloatingTelegram />
</body>
    </html>
  );
}