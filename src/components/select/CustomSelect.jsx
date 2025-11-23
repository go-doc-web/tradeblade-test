import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { MdKeyboardArrowDown } from "react-icons/md";
import iconArrow from "../../assets/arrowDown.svg";

import styles from "./CustomSelect.module.scss";

const CustomSelect = ({
  className,
  value,
  onChange,
  options,
  placeholder = "Выберите...",
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const selected = options.find((o) => o.value === value);
  const customSelectedClasses = clsx(styles.select, className);
  return (
    <div ref={ref} className={customSelectedClasses}>
      <button
        className={styles.control}
        onClick={() => setOpen((prev) => !prev)}
        type="button"
      >
        <span>{selected ? selected.label : placeholder}</span>
        <span className={`${styles.arrow} ${open ? styles.open : ""}`}>
          {/* <MdKeyboardArrowDown /> */}
          <img src={iconArrow} alt="arrow down" />
        </span>
      </button>

      {open && (
        <ul className={styles.menu}>
          {options.map((opt) => (
            <li
              key={opt.value}
              className={`${styles.option} ${
                opt.value === value ? styles.active : ""
              }`}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
