import clsx from "clsx";
import React from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as Book } from "../../assets/svg/book.svg";
import { ReactComponent as Briefcase } from "../../assets/svg/briefcase.svg";
import { ReactComponent as Home } from "../../assets/svg/home.svg";
import { ReactComponent as Mail } from "../../assets/svg/mail.svg";
import { ReactComponent as User } from "../../assets/svg/user.svg";
import { RouteName } from "../../router";

import css from "./NavMenu.module.css";

const NavMenu = () => {
  const location = useLocation();
  return (
    <div className={css.nav__menu}>
      <ul className={css.nav__list}>
        <li className={css.nav__item}>
          <a
            className={clsx(css.nav__link, "active__link")}
            href={RouteName.HOME}
          >
            <Home />
          </a>
        </li>
        <li className={css.nav__item}>
          <a className={css.nav__link} href={RouteName.ABOUT}>
            <User />
          </a>
        </li>
        <li className={css.nav__item}>
          <a className={css.nav__link} href={RouteName.SKILLS}>
            <Book />
          </a>
        </li>
        <li className={css.nav__item}>
          <a className={css.nav__link} href={RouteName.WORK}>
            <Briefcase />
          </a>
        </li>
        <li className={css.nav__item}>
          <a className={css.nav__link} href={RouteName.CONTACT}>
            <Mail />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
