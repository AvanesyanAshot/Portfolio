import React from "react";
import css from "./Home.module.css";
import clsx from "clsx";
import { ReactComponent as Github } from "../../assets/svg/github.svg";
import { ReactComponent as Linkedin } from "../../assets/svg/linkedin.svg";
import { ReactComponent as Mouse } from "../../assets/svg/mouse.svg";
import Button from "../../uikit/button/Button";

const Home = () => {
  return (
    <section className={clsx(css.home, "section")} id="home">
      <div className={clsx(css.container, "container", "grid")}>
        <div className={css.data}>
          <span className={css.greeting}>Hello I'm</span>
          <h1 className={css.name}>Ashot</h1>
          <h3 className={css.education}>Frontend Developer</h3>
          <div className={css.buttons}>
            <Button bStyle="ghost">Download CV</Button>
            <Button>About me</Button>
          </div>
        </div>

        <div className={css.handle}>
          img
          {/* <img className={css.img}/> */}
        </div>
        <div className={css.social}>
          <a
            href="https://github.com/AvanesyanAshot"
            className={css.social__link}
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/ashot-avanesyan-829b94230/"
            className={css.social__link}
          >
            <Linkedin />
          </a>
        </div>
        <a href="#about" className={css.scroll}>
          <Mouse className={css.scroll__icon} />
          <span className={css.scroll__name}>Scroll Down</span>
        </a>
      </div>
    </section>
  );
};

export default Home;
