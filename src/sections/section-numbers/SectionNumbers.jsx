import React from "react";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import SectionTitle from "../../components/section-title";
import styles from "./SectionNumbers.module.scss";
import AnimatedNumber from "../../components/animated-number/AnimatedNumber";

const numbersItems = [
  { id: "1", title: "Торговой прибыли", number: 2756, label: "%" },
  {
    id: "2",
    title: `фьючерсных и спотовых сделок`,
    number: 2756,
    label: "",
  },
  {
    id: "3",
    title: `прибыль подписчиков`,

    number: 2756,
    label: "",
  },
];

const SectionNumbers = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <section id="numbers" className={styles.sectionNumbers} ref={ref}>
      <div className={clsx("container", styles.containerNumbers)}>
        <div className={styles.numbersLeft}>
          <SectionTitle
            type="h2"
            className={clsx("section-title", styles.title)}
          >
            Цифры
          </SectionTitle>
          <p className={styles.labelDate}>Cентябрь 2022</p>
        </div>
        <div className={styles.numbersRigth}>
          <ul className={styles.listNumbers}>
            {numbersItems.map((numberItem) => {
              return (
                <li key={numberItem.id} className={styles.itemNumbers}>
                  <SectionTitle type="h3" className={styles.titleItem}>
                    {numberItem.title}
                  </SectionTitle>
                  <span className={styles.number}>
                    <AnimatedNumber
                      targetNumber={inView ? numberItem.number : 0}
                      label={numberItem.label}
                      duration={3000}
                    />
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SectionNumbers;
