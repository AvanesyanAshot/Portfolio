import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import css from "./Header.module.css";
import { ReactComponent as Moon } from "../../../assets/svg/moon.svg";
import { ReactComponent as Sun } from "../../../assets/svg/sun.svg";

import clsx from "clsx";
import NavMenu from "../../../components/nav-menu/NavMenu";
import useDarkMode from "../../../hooks/useDarkMode";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const { isDarkMode, enable, disable } = useDarkMode();

  useEffect(() => {
    window.addEventListener("scroll", () => setScroll(window.scrollY > 40));
    return () => {
      window.removeEventListener("scroll", () =>
        setScroll(window.scrollY > 40)
      );
    };
  }, []);

  return (
    <header
      className={clsx(css.header, {
        [css.scroll__header]: scroll,
        [css.light__scroll__header]: scroll && isDarkMode,
      })}
    >
      <nav className="container">
        <Link className={css.nav__logo} to="/">
          Ashot
        </Link>
        <NavMenu />

        {!isDarkMode ? (
          <span onClick={enable}>
            <Moon className={css.theme} />
          </span>
        ) : (
          <span onClick={disable}>
            <Sun className={css.theme} />
          </span>
        )}
      </nav>
    </header>
  );
};

export default Header;
