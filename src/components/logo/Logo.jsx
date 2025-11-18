import NavLink from "../nav-link";
import logoImg from "../../assets/logo.webp";
import styles from "./Logo.module.scss";

const pathLandingPage = "/";

const Logo = () => {
  return (
    <NavLink href={pathLandingPage} className={styles.logo}>
      <img src={logoImg} alt="logo" />
    </NavLink>
  );
};

export default Logo;
