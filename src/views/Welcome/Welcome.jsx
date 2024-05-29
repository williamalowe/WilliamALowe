import Header from "../../components/Header/Header";
import WelcomeBanner from "../../components/WelcomeBanner/WelcomeBanner";
import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <Header bodyText="Hi there, I'm" highlightText="William Lowe." />
      <WelcomeBanner />
    </div>
  );
};

export default Welcome;
