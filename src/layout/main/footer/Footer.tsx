import clsx from "clsx";
import React from "react";
import css from "./Footer.module.css";
import { ReactComponent as WhatsApp } from "../../../assets/svg/whatsapp.svg";
import { ReactComponent as Telegram } from "../../../assets/svg/telegram.svg";
const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={(clsx(css.container), "container")}>
        <h1 className={css.title}>Ashot</h1>
        <ul className={css.list}>
          <li>
            <a href="#about" className={css.link}>
              About
            </a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
        </ul>
        <ul className={css.social}>
          <li>
            <a className={css.social__link} href="https://t.me/AvanesyanAshot">
              <Telegram />
            </a>
          </li>
          <li>
            <a
              className={css.social__link}
              href="https://api.whatsapp.com/send?phone=79629492870&text=Hello"
            >
              <WhatsApp />
            </a>
          </li>
        </ul>
        <span className={css.copy}>&#169; Ashot.All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
