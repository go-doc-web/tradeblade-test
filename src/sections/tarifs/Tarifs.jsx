import { useState } from "react";
import clsx from "clsx";
import SectionTitle from "../../components/section-title";
import TarifCard from "../../components/tarif-card/TarifCard";
import { pricingItemsConfig } from "../../config/pricingCardConfig";
import styles from "./Tarifs.module.scss";

const Tarifs = () => {
  const [activeSwitch, setActiveSwitch] = useState("spot");

  const currentPlans =
    pricingItemsConfig.find((item) => item.type === activeSwitch)?.plans || [];

  //   const [plans] = pricingItemsConfig.filter((item) => item.type === "spot");
  //   const itemsSpot = plans?.plans;

  return (
    <section id="tariffs" className={styles.sectionTarifs}>
      <div className={clsx("container", styles.containerTarifs)}>
        <SectionTitle type="h2" className={clsx("section-title", styles.title)}>
          Тарифы
        </SectionTitle>
        <div className={styles.switch}>
          <span onClick={() => setActiveSwitch("spot")} className={styles.spot}>
            СПОТ
          </span>
          <span
            onClick={() => setActiveSwitch("futures")}
            className={styles.futures}
          >
            фьючерс
          </span>
        </div>
        <ul className={styles.cardList}>
          {currentPlans.map((card) => (
            <TarifCard
              key={card.id}
              variety={card.variant.toLocaleLowerCase()}
              {...card}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Tarifs;
