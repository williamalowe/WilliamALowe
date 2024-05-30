import Accordion from '../../components/Accordion/Accordion';
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
        <Accordion 
          title={'Title Here'}
          alignment={'left'}
        />
        <Accordion 
          title={'Title Here'}
          alignment={'right'}
        />
      </div>
    </div>
  )
}

export default Projects
