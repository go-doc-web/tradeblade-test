import clsx from "clsx";
import NavLink from "../nav-link";
import logoImg from "../../assets/logo.webp";
import styles from "./Logo.module.scss";

const pathLandingPage = "/";

const Logo = ({ customClass }) => {
  const logoClasses = clsx(styles.logo, customClass);
  return (
    <NavLink href={pathLandingPage} className={logoClasses}>
      <img src={logoImg} alt="logo" />
    </NavLink>
  );
};

export default Logo;
