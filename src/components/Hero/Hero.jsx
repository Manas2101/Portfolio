import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const  Hero= () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Manas</h1>
        <p className={styles.description}>
         With 5 years of experience in full-stack development, I excel in leveraging React and
         NodeJS to build high-performing web applications.
         My expertise spans both front-end and back-end development,
         ensuring seamless integration and user experience. 
         Reach out to see how we can make your ideas a reality!
        </p>
        <a href="mailto:recruitmanas21@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a> <br />
        <a href="https://drive.google.com/file/d/1862ER3pynUcs6vXNexCuy_GUSgrBLhGu/view?usp=drivesdk " className={styles.contactBtn}>
        Check Resume
        </a>
      </div>
      <img
        src={getImageUrl("Hero/HeroImage.jpg")}
        alt="Hero image of me"
        className={styles.HeroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
