import React from "react";
import { Link } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Ashot</Link>
      </nav>
    </header>
  );
};

export default Header;
