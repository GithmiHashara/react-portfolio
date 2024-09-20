import React from "react";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src='/assets/skills/Reactt.png' alt="React" />
            </div>
            <p>React</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src='/assets/skills/Next.png' alt="Next.js" />
            </div>
            <p>Next.js</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src='/assets/skills/js.png' alt="JavaScript" />
            </div>
            <p>JavaScript</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src='/assets/skills/TS.png' alt="TypeScript" />
            </div>
            <p>TypeScript</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src='/assets/skills/Firebase.png' alt="Firebase" />
            </div>
            <p>Firebase</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src='/assets/skills/mongodb.png' alt="MongoDB" />
            </div>
            <p>MongoDB</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src='/assets/skills/html new.png' alt="HTML" />
            </div>
            <p>HTML</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src='/assets/skills/css.png' alt="CSS" />
            </div>
            <p>CSS</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src='/assets/skills/Java.png' alt="Java" />
            </div>
            <p>Java</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src='/assets/skills/Unity.png' alt="Unity" />
            </div>
            <p>Unity</p>
          </div>
        </div>
      </div>
    </section>
  );
};
