import clsx from "clsx";
import React from "react";
import { ReactComponent as Right } from "../../assets/svg/arrow-right.svg";
import css from "./Work.module.css";
const Work = () => {
  return (
    <section className={clsx(css.work, "section")} id="work">
      <span className="section__subtitle">My Portfolio</span>
      <h2 className="section__title">Recent Works</h2>

      <div className={clsx(css.container, "container", "grid")}>
        <div className={css.card}>
          <img className={css.img} src="#" alt="" />
          <h3 className={css.card__title}>Portfolio</h3>
          <div className={css.stack}>
            <span className={css.stack__item}>React</span>
            <span className={css.stack__item}>Css module</span>
          </div>
          <a className={css.button} href="#">
            Demo <Right className={css.icon} />
          </a>
        </div>
        <div className={css.card}>
          <img className={css.img} src="#" alt="" />
          <h3 className={css.card__title}>Calendar</h3>
          <div className={css.stack}>
            <span className={css.stack__item}>React</span>
            <span className={css.stack__item}>Redux</span>
            <span className={css.stack__item}>Ant Design</span>
          </div>
          <a href="#" className={css.button}>
            Demo <Right className={css.icon} />
          </a>
        </div>
        <div className={css.card}>
          <img className={css.img} src="#" alt="" />
          <h3 className={css.card__title}>Shop</h3>
          <a className={css.button} href="#">
            Demo <Right className={css.icon} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
