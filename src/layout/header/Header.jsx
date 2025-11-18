import clsx from "clsx";
import Logo from "../../components/logo/Logo";
import NavLink from "../../components/nav-link";
import styles from "./Header.module.scss";

const navItems = [
  { name: "ЦИФРЫ", href: "#numbers" },
  { name: "СДЕЛКИ ОНЛАЙН", href: "#deals" },
  { name: "О КОМПАНИИ", href: "#about" },
  { name: "КАК НАЧАТЬ", href: "#how-to" },
  { name: "ТАРИФЫ", href: "#tariffs" },
  { name: "FAQ", href: "#faq" },
];

const Header = () => {
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
          <button className={styles.enterButton}>ВХОД</button>
          <button className={styles.registerButton}>РЕГИСТРАЦИЯ</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
