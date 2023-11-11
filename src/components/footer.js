import React from 'react';
import { Link } from "react-router-dom";
import styles from '../styles/Footer.module.css';
import SocialMediaIcons from './socialMedia';


function Footer() {
    return (
      <div className={styles.footer}>
        <div className={styles.main}>
            <h1 className={styles.h1}>TransHelp</h1>
            <button className={styles.button}>Download App</button> 
        </div>
        <SocialMediaIcons />

        <ul className={styles.navlinks}>
            <li className={styles.links}>
                <Link to="/" className={styles.a}>Home</Link>
            </li>
            <li className={styles.links}>
                <Link to="/services" className={styles.a}>Services</Link>
            </li>
            <li className={styles.links}>
                <Link to="/contact" className={styles.a}>Contact</Link>
            </li>
            <li className={styles.links}>
                <Link to="/news" className={styles.a}>News</Link>
            </li>
            <li className={styles.links}>
                <Link to="/services" className={styles.a}>Services</Link>
            </li>
            <li className={styles.links}>
                <Link to="/contact" className={styles.a}>Contact</Link>
            </li>
        </ul>

        <div className={styles.quickForm}></div>
      </div>
    );
  }
  
  export default Footer;