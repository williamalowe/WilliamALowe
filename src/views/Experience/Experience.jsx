import { useState } from "react";
import Header from "../../components/Header/Header";
import styles from "./Experience.module.css";
import ExperienceSwitch from "../../components/ExperienceSwitch/ExperienceSwitch";
import professionalData from "../../assets/professionalExp.json";
import educationData from "../../assets/educationalExp.json";
import Stepper from "../../components/Stepper/Stepper";

const Experience = () => {
  const [visibleExperience, setVisibleExperience] = useState(true);
  const professionalList = professionalData.professional;
  const educationList = educationData.education;

  return (
    <div className={styles.experience}>
      {visibleExperience ? (
        <Header
          bodyText="Professional"
          highlightText="Experience"
          fontSize="2.5rem"
        />
      ) : (
        <Header
          bodyText="Educational"
          highlightText="Experience"
          fontSize="2.5rem"
        />
      )}
      <div className={styles.content}>
        <ExperienceSwitch
          handleClick={() => setVisibleExperience(!visibleExperience)}
          visibleTab={visibleExperience}
        />
        <div className={styles.stepper}>
          {visibleExperience && <Stepper listItems={professionalList} />}
          {!visibleExperience && <Stepper listItems={educationList} />}
        </div>
      </div>
    </div>
  );
};

export default Experience;
