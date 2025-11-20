import clsx from "clsx";
import SectionTitle from "../../components/section-title";
import useViewportWidth from "../../hooks/useViewportWidth";

import ActionForm from "../../components/action-form/ActionForm";
import styles from "./About.module.scss";

const About = () => {
  const { isEqualWidth: isDesktop } = useViewportWidth({ expect: 1440 });
  const { isEqualWidth: isMobile } = useViewportWidth({ expect: 768 });
  const handleSubscribe = (email) => {
    alert(`{На ваш email: ${email} отправлено приглашение}`, email);
    // Логика API...
  };

  return (
    <section className={clsx("section", styles.about)}>
      <div className={clsx("container", styles.containerAbout)}>
        <div className={styles.aboutContent}>
          <SectionTitle
            type={"h3"}
            className={clsx("section-title", styles.title)}
          >
            О компании
          </SectionTitle>
          <p className={styles.aboutText}>
            Мы опытная команда, для которой трейдинг – профессия. TradeBlade
            является авторизованным официальным брокером биржи Binance.
          </p>
          <p className={styles.aboutText}>
            Он представляет пользователям множество преимуществ, таких как более
            високая скорость синхронизации API и возможность создать учетную
            запись Binance через платформу TradeBlade всего в 1 клик.
          </p>
        </div>
        <div className={styles.aboutForm}>
          <p className={styles.formTitle}>
            Попробуйте сейчас и получите {!isDesktop ? <br /> : ""}5 дней
            бесплатного пользования
          </p>
          <ActionForm
            buttonText="Попробовать"
            className={styles.inputNew}
            isStacked={isMobile}
            onSubmit={handleSubscribe}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
