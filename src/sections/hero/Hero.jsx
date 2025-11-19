import { useState } from "react";

import clsx from "clsx";

import styles from "./Hero.module.scss";
import SectionTitle from "../../components/section-title";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleChangeInput = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Мы свяжемся с вами в ближайшее время");
  };
  return (
    <section className={clsx("section", styles.sectionHero)}>
      <div className={clsx("container", styles.containerHero)}>
        {/* Card Hero */}
        <div className={styles.contentHero}>
          <SectionTitle type="h1" className={styles.titleHero}>
            моментально Копируй сделки профи трейдеров
          </SectionTitle>
          <p className={styles.subTitleHero}>
            Начни копировать сделки с успешной командой профессиональных
            трейдеров в автоматическом режиме.
          </p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <Input
              onChange={handleChangeInput}
              type="email"
              placeholder="Ваш e–mail"
              required
              className={styles.input}
              value={email}
            />
            <Button
              type="submit"
              variant="primary"
              className={styles.btnSubmit}
            >
              НАЧАТЬ
            </Button>
          </form>
          <p className={styles.subFormText}>5 дней бесплатного пользования</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
