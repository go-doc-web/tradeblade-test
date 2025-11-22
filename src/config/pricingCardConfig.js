export const pricingItemsConfig = [
  {
    type: "spot",
    plans: [
      {
        id: 1,
        title: "STANDART",
        price: 234,
        discount: "-35%",
        durationOptions: ["1 месяц", "12 месяцев"],
        buttonText: "ПОПРОБОВАТЬ",
        variant: "STANDART",
        features: [
          { id: 1, text: "Ручной трейдинг" },
          {
            id: 2,
            text: "Автоматическое или полуавтоматическое копирование сделок",
          },
          { id: 3, text: "Личный кабинет со статистикой" },
          { id: 4, text: "Среднесрочные сделки с уровнями набора портфеля" },
        ],
      },
      {
        id: 2,
        title: "VIP",
        price: 585,
        discount: "-35%",
        durationOptions: ["1 месяц", "12 месяцев"],
        buttonText: "ПОПРОБОВАТЬ",
        variant: "VIP",
        features: [
          { id: 1, text: "Ручной трейдинг" },
          {
            id: 2,
            text: "Автоматическое или полуавтоматическое копирование сделок",
          },
          { id: 3, text: "Личный кабинет со статистикой" },
          { id: 4, text: "Краткосрочные, среднесрочные и инвест сделки" },
          { id: 5, text: "Доступ в Vip чат с командой" },
          { id: 6, text: "Наш авторский курс по трейдингу" },
        ],
      },
    ],
  },
  {
    type: "futures",
    plans: [
      {
        id: 3,
        title: "STANDART FUTURES",
        price: 199,
        discount: "-25%",
        durationOptions: ["1 месяц", "12 месяцев"],
        buttonText: "ПОПРОБОВАТЬ",
        variant: "STANDART",
        features: [
          { id: 1, text: "Фьючерсный трейдинг" },
          { id: 2, text: "Стратегии для волатильного рынка" },
          { id: 3, text: "Сигналы и автоматизация" },
        ],
      },
      {
        id: 4,
        title: "VIP FUTURES",
        price: 499,
        discount: "-30%",
        durationOptions: ["1 месяц", "12 месяцев"],
        buttonText: "ПОПРОБОВАТЬ",
        variant: "VIP",
        features: [
          { id: 1, text: "Фьючерсный трейдинг PRO" },
          { id: 2, text: "Автоматизированный набор позиций" },
          { id: 3, text: "Премиальные сигналы" },
          { id: 4, text: "Консультации 1 на 1" },
        ],
      },
    ],
  },
];
