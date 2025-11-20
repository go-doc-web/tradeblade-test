// src/components/DealCard/DealCard.jsx
import React from "react";
import styles from "./DealCard.module.scss";

const DealCard = ({ ticker, type, time, profit, target, date }) => {
  const profitValue = parseFloat(profit);
  const profitClass =
    profitValue >= 0 ? styles.profitPositive : styles.profitNegative;
  const arrow = profitValue >= 0 ? "↑" : "↓";

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.ticker}>{ticker}</h3>
        <span className={styles.meta}>
          {type} - {time}
        </span>
      </div>

      <div className={styles.profit}>
        ПРИБЫЛЬ
        <p className={profitClass}>
          {profit} {arrow}
        </p>
      </div>

      <div className={styles.footer}>
        <span className={styles.target}>Цель {target}</span>
        <span className={styles.date}>Дата входа {date}</span>
      </div>
    </div>
  );
};

export default DealCard;
