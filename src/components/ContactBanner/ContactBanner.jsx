import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../Header/Header';
import Socials from '../Socials/Socials';
import styles from './ContactBanner.module.css';
import { faEnvelopeOpen, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const ContactBanner = () => {
  return (
    <div className={styles.banner}>
      <p>Looking to get in touch? Feel free to drop me a message regarding <span>anything</span> at all!</p>
      <Header 
        bodyText='Currently: '
        highlightText='Available for work.'
      />
      <div className={styles.contactIcons}>
        <div>
          <FontAwesomeIcon icon={faLocationDot} />
          <h5>Melbourne, Australia</h5>
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelopeOpen} />
          <h5>WilliamAndrewLowe@Gmail.com</h5>
        </div>
      </div>
      <Socials />
    </div>
  )
}

export default ContactBanner
