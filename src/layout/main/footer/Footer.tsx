import clsx from "clsx";
import React from "react";
import css from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={(clsx(css.container), "container")}>
        <h1 className={css.title}>Ashot</h1>
        <ul className={css.list}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
        </ul>
        <ul className={css.social}>
          <li>
            <a className={css.button} href="https://t.me/AvanesyanAshot">
              Telegram
            </a>
          </li>
          <li>
            <a
              className={css.button}
              href="https://api.whatsapp.com/send?phone=79629492870&text=Hello"
            >
              Whatsapp
            </a>
          </li>
        </ul>
        <span>&#169; Ashot.All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
