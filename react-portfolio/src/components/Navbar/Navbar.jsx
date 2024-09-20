import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <div
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <FaTimes size={30} />
          ) : (
            <FaBars size={30} />
          )}
        </div>
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
