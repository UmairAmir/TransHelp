import React from 'react';
import styles from '../styles/servicesCard.module.css';
import { FaGlobe, FaHeart, FaShieldAlt, FaPuzzlePiece, FaCommentDots, FaUserMd, FaBook } from 'react-icons/fa';

const Card = ({ title, content, icon }) => {
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
    <div className={styles['card-container']}>
      <div className={styles['card-icon']}>
        <h1>{renderIcon()}</h1>
      </div>
      <div className={styles['card-title']}>{title}</div>
      <div className={styles['card-content']}>{content}</div>
    </div>
  );
};

export default Card;
