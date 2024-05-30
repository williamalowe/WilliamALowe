import Accordion from "../../components/Accordion/Accordion";
import Header from "../../components/Header/Header";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./Projects.module.css";
import projectData from "../../assets/projects.json";

const Projects = () => {
  const projects = projectData.projects;

  return (
    <div className={styles.projects}>
      <Header bodyText="Personal" highlightText="Projects." />
      <div className={styles.content}>
        {projects.map((project, index) => (
          <Accordion
            key={project.projectName}
            title={project.projectName}
            alignment={index % 2 === 0 ? "right" : "left"}
          >
            <ProjectCard
              alignment={index % 2 === 0 ? "right" : "left"}
              description={project.projectDescription}
              stack={project.projectStack}
              iterations={project.projectIterations}
              img={project.projectImage}
              repoURL={project.repoURL}
              demoURL={project.demoURL}
            />
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Projects;
