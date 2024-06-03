import Accordion from "../../components/Accordion/Accordion";
import Header from "../../components/Header/Header";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./Projects.module.css";
import projectData from "../../assets/projects.json";
import OtherProjects from "../../components/OtherProjects/OtherProjects";
import { motion } from "framer-motion";

const parent = {
  hidden: {},
  mounted: {
    transition: {
      delay: 0.5,
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const child = {
  hidden: {
    opacity: 0,
    x: -20
  },
  mounted : {
    opacity: 1,
    x: 0
  }
}

const Projects = () => {
  const projects = projectData.projects;

  return (
    <div className={styles.projects}>
      <Header bodyText="Personal" highlightText="Projects." fontSize="2.5rem" />
      <motion.div className={styles.content}
        variants={parent}
        initial='hidden'
        animate='mounted'
      >
        {projects.map((project, index) => (
          <motion.div key={project.projectName}
            variants={child}
          >
          <Accordion
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
          </motion.div>
        ))}
        <motion.div
        variants={child}
        >
        <Accordion title="Other Projects" alignment="left">
          <OtherProjects />
        </Accordion>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
