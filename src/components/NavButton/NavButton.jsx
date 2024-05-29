import { Link } from "react-router-dom";
import styles from "./NavButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons/faRightLong";
import { motion } from 'framer-motion';

const NavButton = ({ link, text }) => {
  return (
    <div className={styles.navbutton}>
      <Link to={link}>
        <div className={styles.text}>
          {text}
          <div className={styles.underline}></div>
        </div>
        <motion.div className={styles.arrow}
          initial={{
            x: 0
          }}
          animate={{
            x: 20
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <FontAwesomeIcon icon={faRightLong} />
        </motion.div>
      </Link>
    </div>
  );
};

export default NavButton;
