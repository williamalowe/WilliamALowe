import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Header/Header";
import Socials from "../Socials/Socials";
import styles from "./ContactBanner.module.css";
import {
  faEnvelopeOpen,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const ContactBanner = () => {
  return (
    <div className={styles.banner}>
      <motion.p
        initial={{
          opacity: 0,
          x: -20,
        }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
          },
        }}
      >
        Looking to get in touch? Feel free to drop me a message regarding{" "}
        <span>anything</span> at all!
      </motion.p>
      <Header bodyText="Currently: " highlightText="Available for work." />
      <div className={styles.center}>
        <motion.div
          className={styles.contactIcons}
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5,
            },
          }}
        >
          <div>
            <FontAwesomeIcon icon={faLocationDot} />
            <h5>Melbourne, Australia</h5>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelopeOpen} />
            <h5>WilliamAndrewLowe@Gmail.com</h5>
          </div>
        </motion.div>
        <Socials />
      </div>
    </div>
  );
};

export default ContactBanner;
