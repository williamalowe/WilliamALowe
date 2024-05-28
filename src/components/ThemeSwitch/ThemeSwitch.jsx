import styles from './ThemeSwitch.module.css';
import { motion } from 'framer-motion';

const ThemeSwitch = ({ handleClick }) => {
  return (
    <motion.button 
      className={styles.switch} 
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div></div>
      <div></div>
    </motion.button>
  )
}

export default ThemeSwitch
