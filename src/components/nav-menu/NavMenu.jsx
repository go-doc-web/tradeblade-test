import React from "react";
import clsx from "clsx";
import styles from "./NavMenu.module.scss";
import NavLink from "../../components/nav-link";

const NavMenu = ({ items, customDesktopNav, customNavLink }) => {
  const deskTopNav = clsx(styles.topNav, customDesktopNav);
  const navLink = clsx(styles.navLink, customNavLink);
  return (
    <nav>
      <menu className={deskTopNav}>
        {items.map((item) => (
          <li key={item.name}>
            <NavLink className={navLink} href={item.href}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </menu>
    </nav>
  );
};

export default NavMenu;
