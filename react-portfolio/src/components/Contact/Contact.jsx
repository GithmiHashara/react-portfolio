import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src='assects\contact\emailIcon.png' alt="Email icon" />
        
          <a href="githmihashara7@gmail.com">myemail@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src='assects\contact\linkedinIcon.png'
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/myname">linkedin.com/myname</a>
        </li>
        <li className={styles.link}>
          <img src=' assects\contact\githubIcon.png' alt="Github icon" />
          <a href="https://www.github.com/GithmiHashara">github.com/GithmiHashara</a>
        </li>
      </ul>
    </footer>
  );
};
