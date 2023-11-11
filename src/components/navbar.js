import styles from '../styles/Navbar.module.css';
import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className={styles.navbar}>
          <div className={styles.logo}>TransHelp</div>
          <ul className={`${styles.navlinks} ${isMenuOpen ? styles.active : ''}`}>
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
              <button className={styles.button}>Download App</button> 
          </ul>
          <div className={styles.burger} onClick={toggleMenu}>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
          </div>
          <Outlet />
        </nav>
    );
  }
  
  export default Navbar;