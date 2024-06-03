import styles from './ExperienceSwitch.module.css';
import { AnimatePresence, motion } from 'framer-motion';

const ExperienceSwitch = ({ handleClick, visibleTab }) => {
  
  return (
    <motion.div 
      className={styles.switch} 
      onClick={handleClick}
      initial={{
        opacity: 0,
        x: -20
      }}
      animate={{
        opacity: 1,
        x: 0
      }}
    >
      <div className={styles.left}>
        <h5 className={visibleTab ? styles.active : ''}>Professional</h5>
        <AnimatePresence>
        {
          visibleTab &&
          <motion.div className={styles.fill}
            initial={{
              width: 0
            }}
            animate={{
              width: '100%'
            }}
            exit={{
              width: 0
            }}
          />
        }
        </AnimatePresence>
      </div>
      <div className={styles.right}>
        <h5 className={!visibleTab ? styles.active : ''}>Education</h5>
        <AnimatePresence>
        {
          !visibleTab &&
          <motion.div className={styles.fill}
            initial={{
              width: 0
            }}
            animate={{
              width: '100%'
            }}
            exit={{
              width: 0
            }}
          />
        }
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default ExperienceSwitch
