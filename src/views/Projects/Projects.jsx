import Accordion from '../../components/Accordion/Accordion';
import Header from '../../components/Header/Header';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
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
        >
          <ProjectCard 
            alignment={'left'}
          />
        </Accordion>
        <Accordion 
          title={'Title Here'}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos expedita at quo nam autem, possimus culpa minus aliquid voluptatibus voluptates ipsam ex pariatur alias necessitatibus delectus? Dicta, animi eius? Consectetur?
        </Accordion>
      </div>
    </div>
  )
}

export default Projects
