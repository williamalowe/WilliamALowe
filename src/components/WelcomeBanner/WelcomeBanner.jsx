import { Link } from "react-router-dom";
import styles from "./WelcomeBanner.module.css";
import { motion } from "framer-motion";

const parent = {
  mounted: {
    transition: {
      duration: 0.5,
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}
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
  }
}
const WelcomeBanner = () => {
  return (
    <motion.div className={styles.welcome}
    variants={parent}
    initial='hidden'
    animate='mounted'
    >
      <motion.p
        variants={child}
      >
        Just a soon-to-graduate Computer Science student, fresh frontend
        developer, and classic big nerd. I spend my days and nights building and
        iterating on a number of <Link to={"/projects"}>projects</Link>,
        learning, practicing and evolving my skills so that I can become the
        best developer that I can be.
      </motion.p>
      <motion.p
        variants={child}
      >
        I have a wide range of both educational and professional{" "}
        <Link to={"/experience"}>experience</Link> with exposure to various
        industries ranging from agriculture/farming to hospitality to
        government-level social and market research. I also have many{" "}
        <Link to={"./about"}>interests</Link> including cooking, gaming,
        longboarding, and camping.
      </motion.p>
    </motion.div>
  );
};

export default WelcomeBanner;
