import React from 'react';
import styles from '../styles/Card.module.css';

function Card({ heading, paragraph }) {
  return (
    <div className={styles.card}>
      <div className={styles.headingDiv}>
        <h1>{heading}</h1>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.paraDiv}>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

export default Card;