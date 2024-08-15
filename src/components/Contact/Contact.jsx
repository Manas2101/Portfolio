import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="" />
          <a href="mailto:recruitmanas21@gmail.com">recruitmanas21@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt=""
          />
          <a href="https://linkedin.com/in/manas-pandey-156639278/">linkedin.com/manaspandey</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="" />
          <a href="https://github.com/Manas2101">github.com/manas</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/phone.png")} alt="" />
          <a href="tel:+918923934298">+918923934298</a>
        </li>
      </ul>
    </footer>
  );
};
