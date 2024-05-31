import CardDeck from '../../components/CardDeck/CardDeck';
import Header from '../../components/Header/Header';
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
    </div>
  )
}

export default About
