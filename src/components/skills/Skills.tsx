import clsx from "clsx";
import React from "react";
import css from "./Skills.module.css";
import { ReactComponent as Check } from "../../assets/svg/check.svg";

const Skills = () => {
  return (
    <section className={clsx(css.skills, "section")} id="skills">
      <span className="section__subtitle">My Abilities</span>
      <h2 className="section__title">My Experience</h2>
      <div className={clsx(css.container, "container")}>
        <div className={css.content}>
          <h3 className={css.content__title}>Frontend developer</h3>
          <div className={css.data}>
            <div className={css.group}>
              <div className={css.box}>
                <Check className={css.icon} />
                <h3 className={css.box__title}>HTML</h3>
                <span className={css.box__level}>Basic</span>
              </div>
              <div className={css.box}>
                <Check className={css.icon} />
                <h3 className={css.box__title}>Css</h3>
                <span className={css.box__level}>Advanced</span>
              </div>
              <div className={css.box}>
                <Check className={css.icon} />
                <h3 className={css.box__title}>JavaScript</h3>
                <span className={css.box__level}>Intermediate</span>
              </div>
              {/* <div className={css.box}>
                <Check />
                <h3 className={css.box__title}>Git</h3>
                <span className={css.box__level}>Intermediate</span>
              </div> */}
              <div className={css.box}>
                <Check className={css.icon} />
                <h3 className={css.box__title}>React</h3>
                <span className={css.box__level}>Intermediate</span>
              </div>
              <div className={css.box}>
                <Check className={css.icon} />
                <h3 className={css.box__title}>JavaScript</h3>
                <span className={css.box__level}>Intermediate</span>
              </div>
            </div>
          </div>
        </div>
        <div className={css.content}>
          <h3 className={css.content__title}>Backend developer</h3>
          <div className={css.data}>
            <div className={css.group}>
              <div className={css.box}>
                <Check className={css.icon} />
                <h3 className={css.box__title}>Node js</h3>
                <span className={css.box__level}>Basic</span>
              </div>
              <div className={css.box}>
                <Check className={css.icon} />
                <h3 className={css.box__title}>Python</h3>
                <span className={css.box__level}>Basic</span>
              </div>
              <div className={css.box}>
                <Check className={css.icon} />
                <h3 className={css.box__title}>Sql</h3>
                <span className={css.box__level}>Intermediate</span>
              </div>
              <div className={css.box}>
                <Check className={css.icon} />
                <h3 className={css.box__title}>Next js</h3>
                <span className={css.box__level}>Intermediate</span>
              </div>
              <div className={css.box}>
                <Check className={css.icon} />
                <h3 className={css.box__title}>Docker</h3>
                <span className={css.box__level}>Basic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
