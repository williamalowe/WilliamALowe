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

const Socials = () => {
  return (
    <div className={styles.socials}>
      <p>Find me on </p>
      <motion.a
        href="https://github.com/williamalowe"
        target="_blank"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <FontAwesomeIcon icon={faGithub} />
      </motion.a>
      <motion.a
        href="https://linkedin.com/in/william-lowe-b08707297"
        target="_blank"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </motion.a>
      <motion.a
        href="https://www.instagram.com/will.lowe.webdev/"
        target="_blank"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <FontAwesomeIcon icon={faInstagram} />
      </motion.a>
      <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
        <Link to={"/contact"} className={styles.contactLink}>
          <FontAwesomeIcon icon={faEnvelopeOpen} />
        </Link>
      </motion.div>
    </div>
  );
};

export default Socials;
