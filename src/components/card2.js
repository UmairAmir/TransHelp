import styles from '../styles/Card2.module.css';
import React from 'react';




function Card2({heading, para, icon}) {
    return (
        <div className={styles.container}>
            <div className={styles.iconDiv}>
              <img src={icon} alt="Card" />
            </div>
            <div className={styles.cardContent}>
                <h1>{heading}</h1>
                <p>{para}</p>
            </div>
        </div>    
    );
  }
  
  export default Card2;