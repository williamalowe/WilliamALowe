import Header from '../../components/Header/Header';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <Header 
        bodyText='About'
        highlightText='Me.'
      />
    </div>
  )
}

export default About
