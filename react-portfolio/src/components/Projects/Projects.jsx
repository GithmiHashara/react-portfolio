import React from "react";
import styles from "./Projects.module.css";


export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.content}>
        <div className={styles.projects}>
          {/* Project A */}
          <div className={styles.project}>
            <div className={styles.projectImageContainer}>
              <img src="\assects\projects\project.png" alt="Project A" />
            </div>
            <h3 className={styles.projectTitle}>Stay Nest</h3>
            <p className={styles.projectDescription}>
            A web app that allows you to make reservations and listinings propeties.
            </p>
            <div className={styles.skills}>
              <span className={styles.skill}>React</span>
              <span className={styles.skill}>Express</span>
              <span className={styles.skill}>Node</span>
            </div>
            <div className={styles.links}>
              <a href="https://www.example.com" className={styles.link}>Demo</a>
              <a href="https://www.github.com" className={styles.link}>Source</a>
            </div>
          </div>

          {/* Project B */}
          <div className={styles.project}
          
          >
            <div className={styles.projectImageContainer}>
              <img src="\assects\projects\Whatsapp.png" alt="Project B" />
            </div>
            <h3 className={styles.projectTitle}>WhatsApp Clone</h3>
            <p className={styles.projectDescription}>
              A WhatsApp clone made using Next Js , Firebase and Tailwind Css.
            </p>
            <div className={styles.skills}>
              <span className={styles.skill}>React</span>
              <span className={styles.skill}>Express</span>
              <span className={styles.skill}>Node</span>
              <span className={styles.skill}>Sass</span>
            </div>
            <div className={styles.links}>
              <a href="https://www.example.com" className={styles.link}>Demo</a>
              <a href="https://www.github.com" className={styles.link}>Source</a>
            </div>
          </div>

           {/* Project C */}
           <div className={styles.project}>
            <div className={styles.projectImageContainer}>
              <img src="\assects\projects\project.png" alt="Project A" />
            </div>
            <h3 className={styles.projectTitle}>Instagram Clone</h3>
            <p className={styles.projectDescription}>
              A Instagram clone made using React, Firebase, and Tailwind Css.
            </p>
            <div className={styles.skills}>
              <span className={styles.skill}>React</span>
              <span className={styles.skill}>Express</span>
              <span className={styles.skill}>Node</span>
            </div>
            <div className={styles.links}>
              <a href="https://www.example.com" className={styles.link}>Demo</a>
              <a href="https://www.github.com" className={styles.link}>Source</a>
            </div>
          </div>

           {/* Project D */}
           <div className={styles.project}>
            <div className={styles.projectImageContainer}>
              <img src="\assects\projects\project.png" alt="Project A" />
            </div>
            <h3 className={styles.projectTitle}>Codify-C</h3>
            <p className={styles.projectDescription}>
             A mobile app that allows you to learn programming languages on the go.
            </p>
            <div className={styles.skills}>
              <span className={styles.skill}>React</span>
              <span className={styles.skill}>Express</span>
              <span className={styles.skill}>Node</span>
            </div>
            <div className={styles.links}>
              <a href="https://www.example.com" className={styles.link}>Demo</a>
              <a href="https://www.github.com" className={styles.link}>Source</a>
            </div>
          </div>
           {/* Project A */}
           <div className={styles.project}>
            <div className={styles.projectImageContainer}>
              <img src="\assects\projects\project.png" alt="Project A" />
            </div>
            <h3 className={styles.projectTitle}>Project A</h3>
            <p className={styles.projectDescription}>
              This is a project made to learn the latest languages by building an app.
            </p>
            <div className={styles.skills}>
              <span className={styles.skill}>React</span>
              <span className={styles.skill}>Express</span>
              <span className={styles.skill}>Node</span>
            </div>
            <div className={styles.links}>
              <a href="https://www.example.com" className={styles.link}>Demo</a>
              <a href="https://www.github.com" className={styles.link}>Source</a>
            </div>
          </div>

          {/* Add more projects similarly */}
        </div>
      </div>
    </section>
  );
};
