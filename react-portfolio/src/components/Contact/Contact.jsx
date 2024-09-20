import React from 'react';
import styles from './Contact.module.css';
//import {emailIcon, linkedinIcon, githubIcon} from '../../assets/contact';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="https://formspree.io/f/xrbzwple" method='post'>
        <div className={styles.formGroup}>
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className={styles.submitButton} type="submit" value="Submit" />
      </form>
      <div className={styles.separator}></div> {/* Line separator */}
      <div className={styles.coloredBox}></div>
      <form action=""></form>

      {/* Contact Links Section */}
      <ul className={styles.links}>
   <li className={styles.link}>
      <AiOutlineMail size={24} /> {/* Email Icon */}
      <a href="mailto:myemail@email.com">githmihashara7@gmail.com</a>
   </li>
   <li className={styles.link}>
      <FaLinkedin size={24} /> {/* LinkedIn Icon */}
      <a href="https://www.linkedin.com/in/githmi-hashara-387127260/">linkedin.com/GithmiHashara</a>
   </li>
   <li className={styles.link}>
      <FaGithub size={24} /> {/* GitHub Icon */}
      <a href="https://github.com/GithmiHashara">github.com/GithmiHashara</a>
   </li>
</ul>
    </section>
  );
}

export default Contact;
