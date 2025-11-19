import { useState } from "react";

import clsx from "clsx";
import Logo from "../../components/logo/Logo";
import NavLink from "../../components/nav-link";
import Button from "../../components/button/Button";
import styles from "./Header.module.scss";

// TODO to make hover for menu-lins on desktop

const navItems = [
  { name: "ЦИФРЫ", href: "#numbers" },
  { name: "СДЕЛКИ ОНЛАЙН", href: "#deals" },
  { name: "О КОМПАНИИ", href: "#about" },
  { name: "КАК НАЧАТЬ", href: "#how-to" },
  { name: "ТАРИФЫ", href: "#tariffs" },
  { name: "FAQ", href: "#faq" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const containerClasses = clsx("container", styles.containerHeader);
  return (
    <header className={styles.header}>
      <div className={containerClasses}>
        <Logo />
        {/* Desktop menu  */}
        <nav className={styles.desktopNav}>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              href={item.href}
              className={styles.navLink}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div className={styles.btnHeaderGroupe}>
          <Button variant="secondary" className={styles.enterButton}>
            ВХОД
          </Button>
          <Button variant="primary" className={styles.registerButton}>
            РЕГИСТРАЦИЯ
          </Button>
        </div>
        <div
          className={`${styles.burger} ${isOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        {/* Mobile menu (виїжджаюча панель) */}
        <nav className={`${styles.mobileMenu} ${isOpen ? styles.active : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              href={item.href}
              onClick={toggleMenu}
              isMobile={true}
            >
              {item.name}
            </NavLink>
          ))}
          <div className={styles.btnsMobileMenu}>
            <Button className={styles.mobileRegisterButton} variant="primary">
              РЕГИСТРАЦИЯ
            </Button>
            <Button className={styles.mobileEnterButton} variant="secondary">
              Войти
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
