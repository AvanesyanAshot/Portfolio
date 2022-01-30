import clsx from "clsx";
import React from "react";
import css from "./Home.module.css";
const Home = () => {
  return (
    <section className={clsx(css.home, "section")}>
      <div className={clsx(css.home__container, "container", "grid")}></div>
    </section>
  );
};

export default Home;
