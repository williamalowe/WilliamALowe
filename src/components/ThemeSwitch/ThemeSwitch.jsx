import styles from './ThemeSwitch.module.css';
import { motion } from 'framer-motion';

const ThemeSwitch = ({ handleClick }) => {
  return (
    <motion.button 
      className={styles.switch} 
      onClick={handleClick}
      initial={{
        opacity: 0,
        x: 20
      }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5
        }
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div></div>
      <div></div>
    </motion.button>
  )
}

export default ThemeSwitch
