import { motion } from 'framer-motion';
import styles from './Card.module.css';

const Card = ({ header, children }) => {
  return (
    <motion.div 
      className={styles.card}
      whileHover={{ scale: 1.1 }}
    >
      <div className={styles.header}>
        {header}
      </div>
        {children}
    </motion.div>
  )
}

export default Card
