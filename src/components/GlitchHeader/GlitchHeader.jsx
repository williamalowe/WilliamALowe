import { useEffect } from "react";
import styles from "./GlitchHeader.module.css";
import { motion } from 'framer-motion';

const GlitchHeader = ({ text }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;

  const setGlitch = () => {
    let iteration = 0;
    document.querySelector("h1").onmouseover = (event) => {
      clearInterval(interval);
      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
        if (iteration >= event.target.dataset.value.length) {
          clearInterval(interval);
        }
        iteration += 1 / 3;
      }, 30);
    };
  }

  useEffect(() => {
    setGlitch();
  }, []);
  return (
    <motion.div className={styles.glitch} >
      <h1 data-value={text}>{text}</h1>
    </motion.div>
  );
};

export default GlitchHeader;
