import { motion, AnimatePresence } from 'framer-motion';
import styles from './Stepper.module.css';

const wrapper = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1

  }
}
const child = {
  hidden: {
    opacity: 0,
    y: -10
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

const Stepper = ({ listItems }) => {
  return (
    <motion.ol className={styles.stepper}
      variants={wrapper}
      initial='hidden'
      animate='visible'
      transition={{
        delayChildren: 0.3,
        staggerChildren: 0.2
      }}
    >
      {
        listItems.map((item, index) => 
          <motion.li 
            key={index}
            variants={child}
          >
            <div className={styles.content}>
              <h3>{item.institute}</h3>
              <h5>{item.subheader}</h5>
              <p>{item.date}</p>
              <p>{item.description}</p>
            </div>
          </motion.li>
        )
      }
    </motion.ol>
    
  )
}

export default Stepper
