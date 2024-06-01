import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Socials.module.css";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const parent = {
  hidden: {},
  mounted: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
const child = {
  hidden: {
    opacity: 0,
    x: -20
  },
  mounted: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  },
};

const Socials = () => {
  return (
    <motion.div
      className={styles.socials}
      variants={parent}
      initial="hidden"
      animate="mounted"
    >
      <motion.p variants={child}>Find me on</motion.p>
      <motion.a
        href="https://github.com/williamalowe"
        target="_blank"
        variants={child}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <FontAwesomeIcon icon={faGithub} />
      </motion.a>
      <motion.a
        href="https://linkedin.com/in/william-lowe-b08707297"
        target="_blank"
        variants={child}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </motion.a>
      <motion.a
        href="https://www.instagram.com/will.lowe.webdev/"
        target="_blank"
        variants={child}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <FontAwesomeIcon icon={faInstagram} />
      </motion.a>
      <motion.div
        variants={child}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to={"/contact"} className={styles.contactLink}>
          <FontAwesomeIcon icon={faEnvelopeOpen} />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Socials;
