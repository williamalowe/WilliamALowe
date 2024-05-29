import Header from '../../components/Header/Header';
import styles from './Welcome.module.css';

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <Header 
      bodyText='Hi there, I&apos;m'
      highlightText='William Lowe.'/>
    </div>
  )
}

export default Welcome
