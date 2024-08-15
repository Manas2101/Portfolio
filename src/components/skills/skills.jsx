import React from "react";
import styles from "./Skills.module.css";
import { getImageUrl } from "../../utils";

const skills = {
    frontend: [
      { title: "HTML", imageSrc: getImageUrl("skills/html.png") },
      { title: "CSS", imageSrc: getImageUrl("skills/css.png") },
      { title: "JavaScript", imageSrc: getImageUrl("skills/javascript.png") },
      { title: "React", imageSrc: getImageUrl("skills/react.png") },
      { title: "Zod", imageSrc: getImageUrl("skills/zod.png") }
    ],
    backend: [
      { title: "Node.js", imageSrc: getImageUrl("skills/node.png") },
      { title: "PHP", imageSrc: getImageUrl("skills/php.png") }
    ],
    databases: [
      { title: "MySQL", imageSrc: getImageUrl("skills/mysql.png") },
      { title: "MongoDB", imageSrc: getImageUrl("skills/mongodb.png") },
      { title: "PostgreSQL", imageSrc: getImageUrl("skills/postgre.png") }
    ]
  };
  
export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skillsContent}>
        {Object.keys(skills).map((category) => (
          <div key={category} className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>{capitalizeFirstLetter(category)}</h3>
            <ul className={styles.skillsList}>
              {skills[category].map((skill, index) => (
                <li key={index} className={styles.skillItem}>
                  <img src={skill.imageSrc} alt={skill.title} />
                  {skill.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
