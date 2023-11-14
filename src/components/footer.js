import React from 'react';
import { Link } from "react-router-dom";
import styles from '../styles/Footer.module.css';
import SocialMediaIcons from './socialMedia';


function Footer() {
    const scrollToFooter = (event) => {
        event.preventDefault(); // Prevent the default behavior of the link
        const footerElement = document.getElementById('footer'); // Replace 'footer' with the actual id of your footer element
        if (footerElement) {
          footerElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
      <div className={styles.footer}>
        <div className={styles.left}>
        <div className={styles.main}>
            <h1 className={styles.h1}>TransHelp</h1>
            <button className={styles.button}>Download App</button> 
        </div>

        <ul className={styles.navlinks}>
            <li className={styles.links}>
                <Link to="/" className={styles.a}>Home</Link>
            </li>
            <li className={styles.links}>
                <Link to="/services" className={styles.a}>Services</Link>
            </li>
            <li className={styles.links}>
                <Link to="/contact" className={styles.a} onClick={scrollToFooter}>Contact</Link>
            </li>
            
        </ul>

        </div>

        <div className={styles.address}>
          <h1>Address</h1>
          <p>Lorem ipsum sdfa sdf asdf sdfsdfsdfsdf sdfasdfsd dsfadf sdfsfasdf</p>
          <SocialMediaIcons />

        </div>


      </div>
    );
  }
  
  export default Footer;