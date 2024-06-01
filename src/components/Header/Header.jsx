import { motion } from 'framer-motion';
import styles from './Header.module.css';

const Header = ({ bodyText, highlightText, fontSize }) => {
  return (
    <motion.div 
      className={styles.header} 
      style={{fontSize: fontSize}}
      initial={{
        opacity: 0,
        x: -20
      }}
      animate={{
        opacity: 1,
        x: 0
      }}
      transition={{
        duration: 0.5
      }}
    >
      <h3>{bodyText}</h3>
      <div className={styles.animate}>
        <span hidden={true}>{highlightText}</span>
        <span>{highlightText}</span>
        <span hidden={true}>{highlightText}</span>
      </div>
    </motion.div>
  )
}

export default Header
