// src/components/Education/Education.js

import React from 'react';
import styles from './Education.module.css';
import { getImageUrl } from '../../utils';

const educationData = [
  {
    title: 'Bachelor of Technology in Computer Science',
    description: 'Graphic Era University',
    YearofPassing: '2025',
    imageSrc: 'edu/geu.png',
  },
  {
    title: 'Class 12',
    description: 'Little Scholars',
    YearofPassing: '2021',
    imageSrc: 'edu/ls.png',
  },
];

const Education = () => {
  return (
    <div className={styles.education}>
      <h2 className={styles.title}>Education</h2>
      <div className={styles.educationContent}>
        {educationData.map((item, index) => (
          <div key={index} className={styles.educationItem}>
            <img src={getImageUrl(item.imageSrc)} alt={`${item.title} logo`} />
            <div className={styles.educationItemDetails}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>Year of Passing: {item.YearofPassing}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
