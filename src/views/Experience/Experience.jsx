import { useState } from "react";
import Header from "../../components/Header/Header";
import styles from "./Experience.module.css";
import ExperienceSwitch from "../../components/ExperienceSwitch/ExperienceSwitch";

const Experience = () => {
  const [visibleExperience, setVisibleExperience] = useState(true);

  return (
    <div className={styles.experience}>
      {visibleExperience ? (
        <Header bodyText="Professional" highlightText="Experience" />
      ) : (
        <Header bodyText="Educational" highlightText="Experience" />
      )}
      <div className={styles.content}>
        <ExperienceSwitch 
        handleClick={() => setVisibleExperience(!visibleExperience)}
        visibleTab={visibleExperience}
        />
      </div>
    </div>
  );
};

export default Experience;
