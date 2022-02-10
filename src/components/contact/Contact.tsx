import clsx from "clsx";
import React, { useEffect } from "react";
import css from "./Contact.module.css";
import { ReactComponent as Mail } from "../../assets/svg/mail.svg";
import { ReactComponent as WhatsApp } from "../../assets/svg/whatsapp.svg";
import { ReactComponent as Telegram } from "../../assets/svg/telegram.svg";
import { ReactComponent as Right } from "../../assets/svg/arrow-right.svg";
import useDarkMode from "../../hooks/useDarkMode";

const Contact = () => {
  const { isDarkMode } = useDarkMode();
  useEffect(() => {
    console.log(isDarkMode);
  }, [isDarkMode]);
  return (
    <section className={clsx(css.contact, "section")} id="contact">
      <span className="section__subtitle">Get in touch</span>
      <h2 className="section__title">Contact me</h2>
      <div className={(clsx(css.container), "container", "grid")}>
        <div className={css.contact__content}>
          <h3 className={css.title}>Talk to me</h3>
          <div className={css.info}>
            <div className={css.card}>
              <Mail className={css.icon} />
              <h3 className={css.card__title}>Email</h3>
              <span className={css.card__data}>9teron9@gmail.com</span>
              <a className={css.button} href="mailto:9teron9@gmail.com">
                Write me <Right className={css.rightIcon} />
              </a>
            </div>
            <div className={css.card}>
              <WhatsApp className={css.icon} />
              <h3 className={css.card__title}>Whastapp</h3>
              <span className={css.card__data}>9629492870</span>
              <a
                className={css.button}
                href="https://api.whatsapp.com/send?phone=79629492870&text=Hello"
              >
                Write me <Right className={css.rightIcon} />
              </a>
            </div>
            <div className={css.card}>
              <Telegram className={css.icon} />
              <h3 className={css.card__title}>Telegram</h3>
              <span className={css.card__data}>89629492870@AvanesyanAshot</span>
              <a className={css.button} href="https://t.me/AvanesyanAshot">
                Write me <Right className={css.rightIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
