import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { useTypewriter } from "react-simple-typewriter";
import {
  BsTwitter,
  BsGithub,
  BsDiscord,
  BsInstagram,
  BsLinkedin,
  BsFacebook,
} from "react-icons/bs";



export const Hero = () => {
  const CV = "/Githmi-CV.pdf";  // No need for import


  const [text] = useTypewriter({
    words: [
      
      "Undergraduate",
      "Web Developer",      
      "NextJS Developer",
      "FullStack Developer",
      "Game Developer",
      "Tech Explorer", 
      "React Developer",
      "Unity Developer",

    ],
    loop: true,
    delaySpeed: 1000,
  });



  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Githmi Hashara</h1>
       
        <p className={styles.description} >
        I'm an undergraduate, full-stack developer with a passion for building dynamic, innovative web applications !
        </p>
          {/* Typewriter effect added here */}        
          <h2 className={styles.typewriter}>{text}</h2>


          <div className={styles.socialMedia}>
          <a href="https://github.com/GithmiHashara" target="_blank" rel="noopener noreferrer">
              <BsGithub className={styles.socialIcon} />
            </a>
            <a href="https://www.linkedin.com/in/githmi-hashara-387127260/" target="_blank" rel="noopener noreferrer">
              <BsLinkedin className={styles.socialIcon} />
            </a>
            <a href="https://www.instagram.com/https://www.instagram.com/githmihashara/profilecard/?igsh=mws5ehnxzza3yxb2na%3D%3D" target="_blank" rel="noopener noreferrer">
              <BsInstagram className={styles.socialIcon} />
            </a>
            </div>
             {/* Resume Download Button */}
             <a href={CV} download className={styles.cvButton}>
  <button className={styles.resumeButton}>Download CV</button>
</a>



      </div>
      <img
        src='assects\hero\heroImage.png'
        alt="Hero image of me"
        className={styles.heroImg}
      />

      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
