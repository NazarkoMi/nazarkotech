export const iphoneRepairs: Record<string, {
  name: string;
  repairs: {
    title: string;
    price: string;
    time: string;
  }[];
}> = {
  "iphone-13-pro-max": {
    name: "iPhone 13 Pro Max",
    repairs: [
      { title: "Заміна скла", price: "від 3290 грн", time: "2–4 год" },
      { title: "Заміна акумулятора", price: "від 2290 грн", time: "1–2 год" },
      { title: "Заміна заднього скла", price: "від 2890 грн", time: "3–5 год" },
      { title: "Діагностика", price: "безкоштовно", time: "15–30 хв" },
    ],
  },

  "iphone-12": {
    name: "iPhone 12",
    repairs: [
      { title: "Заміна скла", price: "від 2490 грн", time: "2–4 год" },
      { title: "Заміна акумулятора", price: "від 1790 грн", time: "1–2 год" },
      { title: "Заміна заднього скла", price: "від 2290 грн", time: "3–5 год" },
      { title: "Діагностика", price: "безкоштовно", time: "15–30 хв" },
    ],
  },
};