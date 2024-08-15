import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt=" "
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Manas Pandey</h3>
              <p>
                Hello! My name is Manas Pandey, and I am a passionate and
                dedicated full-stack developer with a knack for creating
                seamless and efficient web applications. With a robust skill set
                spanning both front-end and back-end development, I thrive on
                turning complex problems into elegant, user-friendly solutions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Outside of Work</h3>
              <p>
                When I am not coding, you can find me exploring the latest tech
                trends, reading about new advancements in AI, or enjoying a good
                book. I also love engaging in outdoor activities and spending
                quality time with family and friends.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
