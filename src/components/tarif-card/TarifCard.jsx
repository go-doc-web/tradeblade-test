import React from "react";
import clsx from "clsx";
import iconItem from "../../assets/icon-tarif-card.svg";
import Button from "../button";
import Select from "../select/Select";
import styles from "./TarifCard.module.scss";

const TarifCard = ({
  variety = "standart",
  customCard,
  title,
  features,
  price,
  discount,
  buttonText,
  durationOptions,
}) => {
  const cardClasses = clsx(styles.card, styles[variety], customCard);

  return (
    <li className={cardClasses}>
      <div className={styles.headerCard}>
        <h3 className={styles.headerCardTitle}>{title}</h3>
      </div>
      <ul className={styles.listCard}>
        {features.map((feature) => (
          <li key={feature.id}>
            <span className={styles.iconItem}>
              <img src={iconItem || "*"} alt={feature.id} />
            </span>
            <p className={styles.textItem}>{feature.text}</p>
          </li>
        ))}
      </ul>
      <div className={styles.footerCard}>
        <div className={styles.tarifsPrice}>
          <div className={styles.priceItem}>
            <div className="div">
              <span className={styles.currency}>$</span>
              <span className={styles.price}>{price}</span>
              <span className={styles.discount}>{discount}</span>
            </div>
          </div>
          <div className="dropMounth">
            {/* <select name="select">
              <option value="value1" selected>
                {durationOptions[1]}
              </option>

              <option value="value3">{durationOptions[0]}</option>
            </select> */}
            <Select />
          </div>
        </div>
        <Button variant="primary" className={styles.btnCardTarif}>
          <span>{buttonText}</span>
          <span>5 дней бесплатно</span>
        </Button>
      </div>
    </li>
  );
};

export default TarifCard;
