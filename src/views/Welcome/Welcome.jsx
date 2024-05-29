import Header from "../../components/Header/Header";
import NavButton from "../../components/NavButton/NavButton";
import Socials from "../../components/Socials/Socials";
import WelcomeBanner from "../../components/WelcomeBanner/WelcomeBanner";
import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <Header bodyText="Hi there, I'm" highlightText="William Lowe." />
      {/* <WelcomeBanner />
      <NavButton 
        link={'./about'}
        text={'Learn more about me'}
      />
      <Socials /> */}
    </div>
  );
};

export default Welcome;
