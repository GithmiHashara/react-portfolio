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
              <img src="\assects\projects\StayNest.png" alt="Project A" />
            </div>
            <h3 className={styles.projectTitle}>Stay Nest</h3>
            <p className={styles.projectDescription}>
            A web app that allows you to make reservations and listinings propeties.
            </p>
            <div className={styles.skills}>
              <span className={styles.skill}>NextJS</span>
              <span className={styles.skill}>React</span>
              <span className={styles.skill}>MongoDB</span>
              <span className={styles.skill}>Node</span>
            </div>
            <div className={styles.links}>
              <a href="https://www.linkedin.com/posts/githmi-hashara-387127260_nextjs-react-tailwindcss-activity-7242641510943318016-UI16?utm_source=share&utm_medium=member_desktop" className={styles.link}>Demo</a>
              <a href="https://github.com/GithmiHashara/StayNest" className={styles.link}>Source</a>
            </div>
          </div>


            {/* Project D */}
            <div className={styles.project}>
            <div className={styles.projectImageContainer}>
              <img src="\assects\projects\CodifyC.png" alt="Project A" />
            </div>
            <h3 className={styles.projectTitle}>Codify-C</h3>
            <p className={styles.projectDescription}>
             A mobile app that allows you to learn programming languages on the go.
            </p>
            <div className={styles.skills}>
              <span className={styles.skill}>C#</span>
              <span className={styles.skill}>FireBase</span>
              <span className={styles.skill}>Unity</span>
            </div>
            <div className={styles.links}>
              <a href="https://www.linkedin.com/posts/githmi-hashara-387127260_cprogramming-gamebasedlearning-capstoneproject-activity-7235196647113117698-SpVT?utm_source=share&utm_medium=member_desktop" className={styles.link}>Demo</a>
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
              <a href="https://www.linkedin.com/posts/githmi-hashara-387127260_proud-to-showcase-my-nextjs-14-whatsapp-activity-7232022317973786625-l08b?utm_source=share&utm_medium=member_desktop" className={styles.link}>Demo</a>
              <a href="https://github.com/GithmiHashara/Whatsapp-clone" className={styles.link}>Source</a>
            </div>
          </div>

           {/* Project C */}
           <div className={styles.project}>
            <div className={styles.projectImageContainer}>
              <img src="\assects\projects\Insta.png" alt="Project A" />
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
              <a href="https://www.linkedin.com/posts/githmi-hashara-387127260_webdevelopment-reactjs-firebase-activity-7222135640765652992-xrCI?utm_source=share&utm_medium=member_desktop" className={styles.link}>Demo</a>
              <a href="https://github.com/GithmiHashara/Amarise-Social-App" className={styles.link}>Source</a>
            </div>
          </div>

         
           {/* Project A */}
           <div className={styles.project}>
            <div className={styles.projectImageContainer}>
              <img src="\assects\projects\portfolio.png" alt="Project A" />
            </div>
            <h3 className={styles.projectTitle}>React-Portfolio</h3>
            <p className={styles.projectDescription}>
              This is my portfolio website made using NextJs and Tailwind Css.
            </p>
            <div className={styles.skills}>
              <span className={styles.skill}>NextJs</span>
              <span className={styles.skill}>Tailwind css</span>
              <span className={styles.skill}>React</span>
            </div>
            <div className={styles.links}>
              <a href="" className={styles.link}>Demo</a>
              <a href="" className={styles.link}>Source</a>
            </div>
          </div>


           {/* Project A */}
           <div className={styles.project}>
            <div className={styles.projectImageContainer}>
              <img src="\assects\projects\project.png" alt="Project A" />
            </div>
            <h3 className={styles.projectTitle}>Flow-Mate</h3>
            <p className={styles.projectDescription}>
              This is a saas app that allows you to manage your work flow.
            </p>
            <div className={styles.skills}>
              <span className={styles.skill}>NextJs</span>
              <span className={styles.skill}>Bun</span>
              <span className={styles.skill}>React</span>
            </div>
            <div className={styles.links}>
              <a href="" className={styles.link}>Demo</a>
              <a href="" className={styles.link}>Source</a>
            </div>
          </div>

          {/* Add more projects similarly */}
        </div>
      </div>
    </section>
  );
};
