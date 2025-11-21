import React from "react";
import clsx from "clsx";
import styles from "./Footer.module.scss";
import Logo from "../../components/logo/Logo";
import NavMenu from "../../components/nav-menu/NavMenu";
import { navItems } from "../../config/navMenuConfig.js";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={clsx("container", styles.containerFooter)}>
        <div className={styles.left}>
          <p>Быстрая навигация</p>
          <NavMenu
            items={navItems}
            customDesktopNav={styles.footerNav}
            customNavLink={styles.navLinkFooter}
          />
        </div>
        <div className={styles.right}>
          <Logo />
          <p className={styles.copyrightFooter}>
            © 2022 TradeBlade. All rights reserved как назвать класс
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
