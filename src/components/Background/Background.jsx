import { motion } from "framer-motion";
import styles from "./Background.module.css";

const Background = () => {
  return (
    <motion.div 
    className={styles.background}
      animate={{ y: '-100vh',
        x: '-100vw'
       }}
      transition={{ duration: 100,
        repeat: Infinity,
        repeatType: 'reverse'

       }}
    >
    </motion.div>
  )
}

export default Background
