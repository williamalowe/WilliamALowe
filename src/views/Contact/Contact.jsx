import { motion } from 'framer-motion';
import ContactBanner from '../../components/ContactBanner/ContactBanner';
import ContactForm from '../../components/ContactForm/ContactForm';
import Header from '../../components/Header/Header';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Header 
      bodyText='Let&apos;s'
      highlightText='Connect!'
      fontSize='2.5rem'
      />
      <div className={styles.content}>
      <motion.p
      className={styles.mobile}
        initial={{
          opacity: 0,
          x: -20,
        }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            delay: 0.5,
            duration: 0.5,
          },
        }}
      >
        Looking to get in touch? Feel free to drop me a message regarding{" "}
        <span>anything</span> at all!
      </motion.p>
        <div>
          <ContactForm />
        </div>
        <div>
          <ContactBanner />
        </div>
      </div>
    </div>
  )
}

export default Contact
