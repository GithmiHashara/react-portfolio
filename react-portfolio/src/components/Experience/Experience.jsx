// import React from "react";

// import styles from "./Experience.module.css";
// import skills from "../../data/skills.json";
// // import history from "../../data/history.json";
// import { getImageUrl } from "../../utils";

// export const Experience = () => {
//   return (
//     <section className={styles.container} id="experience">
//       <h2 className={styles.title}>Experience</h2>
//       <div className={styles.content}>
//         <div className={styles.skills}>
//           {skills.map((skill, id) => {
//             return (
//               <div key={id} className={styles.skill}>
//                 <div className={styles.skillImageContainer}>
//                   <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
//                 </div>
//                 <p>{skill.title}</p>
//               </div>
//             );
//           })}
//         </div>
//         {/* <ul className={styles.history}>
//           {history.map((historyItem, id) => {
//             return (
//               <li key={id} className={styles.historyItem}>
//                 <img
//                   src={getImageUrl(historyItem.imageSrc)}
//                   alt={`${historyItem.organisation} Logo`}
//                 />
//                 <div className={styles.historyItemDetails}>
//                   <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
//                   <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
//                   <ul>
//                     {historyItem.experiences.map((experience, id) => {
//                       return <li key={id}>{experience}</li>;
//                     })}
//                   </ul>
//                 </div>
//               </li>
//             );
//           })}
//         </ul> */}
//       </div>
//     </section>
//   );
// };

import React from "react";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title} >Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src='assects\skills\html.png' alt="HTML" />
            </div>
            <p>HTML</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src='assects\skills\css.png' alt="CSS" />
            </div>
            <p>CSS</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src='assects\skills\react.png' alt="React" />
            </div>
            <p>React</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src='assects\skills\node.png' alt="Node" />
            </div>
            <p>Node</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="assects\skills\5.png" alt="Next.Js" />
            </div>
            <p>Next.js</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src='assects\skills\mongodb.png'  alt="MongoDB" />
            </div>
            <p>MongoDB</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="assects\skills\javascript-js-icon-2048x2048-nyxvtvk0.png" alt="Figma" />
            </div>
            <p>JavaScript</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src='assects\skills\css.png' alt="CSS" />
            </div>
            <p>CSS</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src='assects\skills\css.png' alt="CSS" />
            </div>
            <p>CSS</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src='assects\skills\css.png' alt="CSS" />
            </div>
            <p>CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
};
