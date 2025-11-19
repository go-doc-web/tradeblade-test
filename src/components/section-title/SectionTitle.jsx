import React from "react";
import clsx from "clsx";
import styles from "./SectionTitle.module.scss";

/**
 * @param {string} children
 * @param {('h1'|'h2'|'h3'|'h4'|'h5'|'h6')} type
 * @param {string} className
 */

const SectionTitle = ({ children, type, className, ...props }) => {
  const TitleTag = type;

  const titleClasses = clsx(styles.base, styles[type], className);

  return (
    <TitleTag className={titleClasses} {...props}>
      {children}
    </TitleTag>
  );
};

export default SectionTitle;
