import React from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

/**

 * @param {('primary'|'secondary'|'text')} variant
 * @param {string} className
 * @param {string} icon
 * @param {React.ReactNode} children
 * @param {object} props
 */
const Button = ({
  children,
  icon,
  variant = "primary",
  className,
  ...props
}) => {
  const buttonClasses = clsx(styles.button, styles[variant], className);

  let content = children;

  if (icon) {
    // 💡 Виправлено: застосовуємо клас styles.contentWrapper до div
    content = (
      <div className={styles.contentWrapper}>
        <img src={icon} alt="Кнопка з іконкою" className={styles.icon} />

        {children}
      </div>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {content}
    </button>
  );
};

export default Button;
