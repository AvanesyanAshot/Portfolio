import React from "react";
import { Link } from "react-router-dom";
import css from "./Header.module.css";
import { ReactComponent as Home } from "../../../assets/svg/home.svg";
import { ReactComponent as Book } from "../../../assets/svg/book.svg";
import { ReactComponent as Briefcase } from "../../../assets/svg/briefcase.svg";
import { ReactComponent as User } from "../../../assets/svg/user.svg";
import { ReactComponent as Mail } from "../../../assets/svg/mail.svg";
import { ReactComponent as Theme } from "../../../assets/svg/moon.svg";
import clsx from "clsx";

const Header = () => {
  return (
    <header className={css.header}>
      <nav className="container">
        <Link className={css.nav__logo} to="/">
          Ashot
        </Link>
        <div className={css.nav__menu}>
          <ul className={css.nav__list}>
            <li className={css.nav__item}>
              <Link className={clsx(css.nav__link, css.active__link)} to="/">
                <Home />
              </Link>
            </li>
            <li className={css.nav__item}>
              <Link className={css.nav__link} to="/">
                <Book />
              </Link>
            </li>
            <li className={css.nav__item}>
              <Link className={css.nav__link} to="/">
                <Briefcase />
              </Link>
            </li>
            <li className={css.nav__item}>
              <Link className={css.nav__link} to="/">
                <User />
              </Link>
            </li>
            <li className={css.nav__item}>
              <Link className={css.nav__link} to="/">
                <Mail />
              </Link>
            </li>
          </ul>
        </div>
        <Theme />
      </nav>
    </header>
  );
};

export default Header;
