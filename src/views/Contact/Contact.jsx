import Header from '../../components/Header/Header';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Header 
      bodyText='Let&apos;s'
      highlightText='Connect!'
      />
    </div>
  )
}

export default Contact
