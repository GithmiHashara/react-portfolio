import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About  = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src='assects\about\aboutImage.png'
          alt="myPhoto"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src='assects\about\cursorIcon.png' alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
              I’m a passionate Fullstack Developer and undergraduate student with a 
              strong focus on web and game development. Skilled in NextJs, React,
               and Unity, I love exploring new technologies and building creative, impactful solutions.
                Always curious and driven to stay on top of the latest trends in tech, I'm committed
                 to growing as a developer and delivering innovative experiences.
             </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};
