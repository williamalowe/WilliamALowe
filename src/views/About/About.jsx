import CardDeck from '../../components/CardDeck/CardDeck';
import Header from '../../components/Header/Header';
import MobileCardDeck from '../../components/MobileCardDeck/MobileCardDeck';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <Header 
        bodyText='About'
        highlightText='Me.'
        fontSize='2.5rem'
      />
      <div className={styles.shuffle}>
        <CardDeck />
      </div>
      <div className={styles.mobile}>
        <MobileCardDeck />
      </div>
    </div>
  )
}

export default About
