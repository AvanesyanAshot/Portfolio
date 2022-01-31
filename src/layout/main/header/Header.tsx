import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import css from "./Header.module.css";
import { ReactComponent as Theme } from "../../../assets/svg/moon.svg";
import clsx from "clsx";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => setScroll(window.scrollY > 40));
    return () => {
      window.removeEventListener("scroll", () =>
        setScroll(window.scrollY > 40)
      );
    };
  }, []);

  return (
    <header className={clsx(css.header, { [css.scroll__header]: scroll })}>
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
