import React from "react";
import { ReactComponent as Award } from "../../assets/svg/award.svg";
import { ReactComponent as Briefcase } from "../../assets/svg/briefcase.svg";
import { ReactComponent as Support } from "../../assets/svg/support.svg";

import clsx from "clsx";
import css from "./About.module.css";
import Button from "../../uikit/button/Button";

const About = () => {
  return (
    <section className="section" id="about">
      <span className="section__subtitle">My Intro</span>
      <h2 className="section__title">About Me</h2>
      <div className={clsx(css.container, "container", "grid")}>
        <div className={css.data}>
          <div className={css.info}>
            <div className={css.box}>
              <Award className={css.icon} />
              <h3 className={css.box__title}>Experience</h3>
              <span className={css.box__subtitle}>1.5 Years working</span>
            </div>
            <div className={css.box}>
              <Briefcase className={css.icon} />
              <h3 className={css.box__title}>Completed</h3>
              <span className={css.box__subtitle}>5 project</span>
            </div>
            <div className={css.box}>
              <Support className={css.icon} />
              <h3 className={css.box__title}>Support</h3>
              <span className={css.box__subtitle}>Online 24/7</span>
            </div>
          </div>
          <p className={css.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In sunt
            eveniet dicta unde saepe ex sapiente! Ipsum iure provident ullam
            corporis harum at et exercitationem consequatur excepturi,
            dignissimos unde sequi.
          </p>

          <Button>Contact me</Button>
        </div>
      </div>
    </section>
  );
};

export default About;
