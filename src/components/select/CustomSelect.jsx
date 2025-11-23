import { useState, useRef, useEffect } from "react";
import styles from "./CustomSelect.module.scss";

const CustomSelect = ({
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

  return (
    <div ref={ref} className={styles.select}>
      <button
        className={styles.control}
        onClick={() => setOpen((prev) => !prev)}
        type="button"
      >
        <span>{selected ? selected.label : placeholder}</span>
        <span className={`${styles.arrow} ${open ? styles.open : ""}`}>▼</span>
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
