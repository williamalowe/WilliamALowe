import { motion } from "framer-motion";
import Card from "../Card/Card";
import styles from "./CardDeck.module.css";

const parent={
  hidden: {},
  mounted: {
    transition: {
      duration: 0.5,
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}
const child={
  hidden: {
    opacity: 0,
  },
  mounted: {
    opacity: 1,
  }
}

const CardDeck = () => {
  return (
    <motion.div className={styles.deck}
      variants={parent}
      initial='hidden'
      animate='mounted'
    >
      <motion.div
        variants={child}
      >
      <Card header="Goals">
        <p>
          While continually practicing the fundamentals, my next learning goals
          include transitioning to Next.js and TypeScript, and diving deeper into Mongo,
          Express, Node, Jest, and Vitest to ensure I have a robust and
          versatile skillset. After some time, I also aim to upskill,
          transitioning from frontend into a full stack developement.
        </p>
      </Card>
      </motion.div>
      <motion.div
        variants={child}
      >

      <Card header="Experience">
        <p>
          Proficient in HTML, CSS, JavaScript, and React, I am soon to graduate
          from Deakin University with a Degree in Computer Science. I enjoy the
          process of learning and enjoy the challenge of tackling new
          technologies to creatively solve various problems. I also have
          a wide-breadth of work experience, having worked in agriculture, hospitality,
          and social/market research.
        </p>
      </Card>
      </motion.div>
      <motion.div
        variants={child}
      >

      <Card header="Interests">
        <p>
          I&apos;m a big nerd with a love for TV/movies, gaming, and tech in
          general. Building things is my jam, including web apps (obviously),
          PCs and mechanical keyboards. I also enjoy most outdoor activities, 
          especially fishing, camping, longboarding, and swimming. If it&apos;s
          outdoors, theres a good chance that I&apos;ve tried it at least once. 
        </p>
      </Card>
      </motion.div>
      <motion.div
        variants={child}
      >

      <Card header="G'day!">
        <p>
          My name is William Lowe, a fresh Aussie frontend developer, and I want
          to work with you!
        </p>
        <img src="profile.jpg" alt="profile picture" />
      </Card>
      </motion.div>
    </motion.div>
  );
};

export default CardDeck;
