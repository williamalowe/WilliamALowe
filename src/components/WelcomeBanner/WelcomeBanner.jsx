import { Link } from "react-router-dom";
import styles from "./WelcomeBanner.module.css";

const WelcomeBanner = () => {
  return (
    <div className={styles.welcome}>
      <p>
        Just a soon-to-graduate Computer Science student, fresh frontend
        developer, and classic big nerd. I spend my days and nights building and
        iterating on a number of <Link to={"/projects"}>projects</Link>,
        learning, practicing and evolving my skills so that I can become the
        best developer that I can be.
      </p>
      <p>
        I have a wide range of both educational and professional{" "}
        <Link to={"/experience"}>experience</Link> with exposure to various
        industries ranging from agriculture/farming to hospitality to
        government-level social and market research. I also have many{" "}
        <Link to={"./about"}>interests</Link> including cooking, gaming,
        longboarding, and camping.
      </p>
    </div>
  );
};

export default WelcomeBanner;
