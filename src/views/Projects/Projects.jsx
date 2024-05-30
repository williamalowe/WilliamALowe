import Header from '../../components/Header/Header';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <Header 
        bodyText='Personal'
        highlightText='Projects.'
      />
      <div className={styles.content}>
        
      </div>
    </div>
  )
}

export default Projects
