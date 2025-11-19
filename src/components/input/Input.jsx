import clsx from "clsx";
import styles from "./Input.module.scss";

/**
 
 * @param {string} type 
 * @param {string} placeholder 
 * @param {string} className
 * @param {object} props 
 */

const Input = ({
  type = "text",
  placeholder = "Введіть дані...",
  className,
  ...props
}) => {
  const inputClasses = clsx(styles.input, className);

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={inputClasses}
      {...props}
    />
  );
};

export default Input;
