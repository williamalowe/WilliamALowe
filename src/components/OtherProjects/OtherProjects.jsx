import styles from './OtherProjects.module.css';
import otherProjectData from "../../assets/otherProjects.json";

const OtherProjects = () => {
  const projects = otherProjectData.otherProjects;

  return (
    <div className={styles.others}>
      {
        projects.map((project) => 
        <article key={project.projectName}>
          <h5>{project.projectName}</h5>
          <ul>
            {
              project.projectStack.map((item) => 
              <li key={item}>{item}</li>
              )
            }
          </ul>
          <p>{project.projectDescription}</p>
        </article>
        )
      }
    </div>
  )
}

export default OtherProjects
