import styles from '../styles/Card2.module.css';
import React from 'react';
import { FaGlobe, FaHeart, FaShieldAlt, FaPuzzlePiece, FaCommentDots, FaUserMd, FaBook } from 'react-icons/fa';




function Card2({heading, para, icon}) {
    const renderIcon = () => {
    switch (icon) {
      case 'book':
        return <FaBook />;
      case 'heart':
        return <FaHeart />;
      case 'doctor':
        return <FaUserMd />
      case 'globe':
        return <FaGlobe />;
      case "dot":
        return <FaCommentDots />;
      case 'shield':
        return <FaShieldAlt />;
      case 'puzzle':
        return <FaPuzzlePiece />;
      default:
        return null;
    }
};
    return (
        <div className={styles.container}>
            <div className={styles.iconDiv}>
                <h1>{renderIcon()}</h1>
            </div>
            <div className={styles.cardContent}>
                <h1>{heading}</h1>
                <p>{para}</p>
            </div>
        </div>    
    );
  }
  
  export default Card2;