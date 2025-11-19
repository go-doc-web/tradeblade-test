import clsx from "clsx";

import styles from "./Hero.module.scss";
import SectionTitle from "../../components/section-title";

const Hero = () => {
  return (
    <section className={clsx("section", styles.sectionHero)}>
      <div className={clsx("section", styles.containerHero)}>
        {/* Card Hero */}
        <div className={styles.contentHero}>
          <SectionTitle type="h1" className={styles.titleHero}>
            моментально Копируй сделки профи трейдеров
          </SectionTitle>
          <div className={styles.subTitleHero}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
