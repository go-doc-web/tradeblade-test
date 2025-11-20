import React, { useState } from "react";
import styles from "./ActionForm.module.scss";
import clsx from "clsx";

import Input from "../input/Input";
import Button from "../button";

const ActionForm = ({
  onSubmit,
  isStacked = false,
  placeholder = "Ваш e-mail",
  buttonText = "Попробовать",
  inputType = "email",
  className = "",
  isLoading = false,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit(value);
    }

    setValue("");
  };

  const formClasses = `
    ${styles.form} 
    ${isStacked ? styles.stacked : ""} 
    ${className}
  `;

  return (
    <form className={formClasses} onSubmit={handleSubmit}>
      <Input
        onChange={handleChange}
        type={inputType}
        placeholder={placeholder}
        required
        className={styles.className}
        value={value}
        disabled={isLoading}
      />
      <Button
        type="submit"
        variant="primary"
        className={styles.btnSubmit}
        disabled={isLoading}
      >
        {isLoading ? "..." : buttonText}
      </Button>
    </form>
  );
};

export default ActionForm;
