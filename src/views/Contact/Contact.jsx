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
