import React from "react";
import clsx from "clsx";
import styles from "./HeroCards.module.scss";

const contentCards = [
  { id: "1", twice: "ETH/USDT", procent: 141, subTwise: "Short" },
  { id: "2", twice: "ETH/USDT", procent: 116, subTwise: "Short" },
];

export const HeroCard = ({ variant = "primery" }) => {
  const cardClasses = clsx(styles.card, styles[variant]);
  return (
    <div className={cardClasses}>
      <div className={styles.twice}>{contentCards[0].twice}</div>
      <p className={styles.subTwise}>{contentCards[0].subTwise}</p>
      <span className={styles.procent}>+{contentCards[0].procent}%</span>
    </div>
  );
};

const HeroCards = () => {
  return (
    <div className={styles.wrappercards}>
      <HeroCard variant="dashed" />
      <HeroCard variant="primary" />
    </div>
  );
};

export default HeroCards;
