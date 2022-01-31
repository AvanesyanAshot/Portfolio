import React from "react";
import { Link } from "react-router-dom";
import css from "./Header.module.css";
import { ReactComponent as Theme } from "../../../assets/svg/moon.svg";

const Header = () => {
  return (
    <header className={css.header}>
      <nav className="container">
        <Link className={css.nav__logo} to="/">
          Ashot
        </Link>

        <Theme />
      </nav>
    </header>
  );
};

export default Header;
