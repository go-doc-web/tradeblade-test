import React from "react";
import clsx from "clsx";
import styles from "./PassedDeals.module.scss";
import DealCard from "./deal-card";
import SectionTitle from "../../components/section-title";

// TODO Налаштувати слайдер

// Імпорт Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Імпорт базових стилів Swiper
import "swiper/css";

const dealsData = [
  {
    id: 1,
    ticker: "NEAR/USDT",
    type: "SPOT",
    time: "1 мин. назад",
    profit: "-58.6206%",
    target: 4,
    date: "06.10.2022",
  },
  {
    id: 2,
    ticker: "BTC/USDT",
    type: "SPOT",
    time: "1 мин. назад",
    profit: "6.02%",
    target: 3,
    date: "06.10.2022",
  },
  {
    id: 3,
    ticker: "ETH/USDT",
    type: "SPOT",
    time: "1 мин. назад",
    profit: "16.3%",
    target: 4,
    date: "06.10.2022",
  },
  {
    id: 4,
    ticker: "NEAR/USDT",
    type: "SPOT",
    time: "1 мин. назад",
    profit: "0.963%",
    target: 4,
    date: "06.10.2022",
  },
  {
    id: 5,
    ticker: "NEAR/USDT",
    type: "SPOT",
    time: "1 мин. назад",
    profit: "58.6206%",
    target: 4,
    date: "06.10.2022",
  },
  {
    id: 6,
    ticker: "NEAR/USDT",
    type: "SPOT",
    time: "1 мин. назад",
    profit: "58.6206%",
    target: 4,
    date: "06.10.2022",
  },
  {
    id: 7,
    ticker: "NEAR/USDT",
    type: "SPOT",
    time: "1 мин. назад",
    profit: "58.6206%",
    target: 4,
    date: "06.10.2022",
  },
];

const PassedDeals = () => {
  const handleScroll = (swiper) => {
    if (!swiper) return;
    const progress = swiper.progress * 100; // 0 → 100
    document.documentElement.style.setProperty(
      "--scroll-thumb-width",
      `${progress}%`
    );
  };
  return (
    <section className={styles.passedDeals}>
      <div className={clsx("container", styles.containerPassedDeals)}>
        <div className={styles.header}>
          <SectionTitle
            type={"h2"}
            className={clsx("section-title", styles.title)}
          >
            ПРОШЕДШИЕ СДЕЛКИ
          </SectionTitle>

          <div className={styles.status}>
            <span className={styles.dot}></span>
            <span>Онлайн</span>
          </div>
        </div>

        <div className={styles.swiperContainer}>
          <Swiper
            spaceBetween={20}
            slidesPerView="auto"
            initialSlide={2}
            freeMode={true}
            onSlideChange={handleScroll}
            onTouchMove={handleScroll}
            onProgress={handleScroll}
            className="my-swiper"
          >
            {dealsData.map((deal) => (
              <SwiperSlide key={deal.id} className="slide">
                <DealCard {...deal} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.scrollThumb}>
            <div className={styles.scrollBar}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassedDeals;
