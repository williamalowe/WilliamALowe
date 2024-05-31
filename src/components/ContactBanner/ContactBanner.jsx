import Header from '../Header/Header';
import styles from './ContactBanner.module.css';

const ContactBanner = () => {
  return (
    <div className={styles.banner}>
      <p>Looking to get in touch? Feel free to drop me a message regarding <span>anything</span> at all!</p>
      <Header 
        bodyText='Currently: '
        highlightText='Available for work.'
      />
    </div>
  )
}

export default ContactBanner
