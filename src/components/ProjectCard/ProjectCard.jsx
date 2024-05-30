import { useEffect, useRef } from "react";
import styles from "./ProjectCard.module.css";
import { motion } from "framer-motion";

const ProjectCard = ({
  alignment,
  description,
  stack,
  iterations,
  img,
  repoURL,
  demoURL,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (alignment === "left") {
      cardRef.current.style.flexDirection = "row";
    } else {
      cardRef.current.style.flexDirection = "row-reverse";
    }
  }, []);
  return (
    <div className={styles.card} ref={cardRef}>
      <div className={styles.description}>
        {/* upper */}
        <p>{description}</p>
        {/* lower */}
        <div className={styles.lists}>
          {/* lower-left */}
          <div className={styles.stack}>
            <h5>Technologies</h5>
            <ul>
              {stack.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          {/* lower-right */}
          <div className={styles.future}>
            <h5>Future Iterations</h5>
            <ul>
              {iterations.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* links */}
        <div className={styles.links}>
          <motion.a
            href={repoURL}
            target="_blank"
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            Repo Link
          </motion.a>
          <motion.a
            href={demoURL}
            target="_blank"
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            Demo Link
          </motion.a>
        </div>
      </div>
      <div className={styles.img}>
        <img src={img} alt="project image" />
      </div>
    </div>
  );
};

export default ProjectCard;
