import Card from "../Card/Card";
import styles from "./CardDeck.module.css";

const CardDeck = () => {
  return (
    <div className={styles.deck}>
      <Card header="Goals">
        <p>
          While continually practicing the fundamentals, my next learning goals
          include transitioning to TypeScript, and diving deeper into Mongo,
          Express, Node, Jest, and Vitest to ensure I have a robust and
          versatile skillset. After some time, I also aim to upskill,
          transitioning from frontend into a full stack developer.
        </p>
      </Card>
      <Card header="Experience">
        <p>
          Proficient in HTML, CSS, JavaScript, and React, I am soon to graduate
          from Deakin University with a Degree in Computer Science. I enjoy the
          process of learning and enjoy the challenege of tackling new
          technologies to creatively solve various problems. I also have
          extensive work experience, having worked in agriculture, hospitality,
          and social/market research.
        </p>
      </Card>
      <Card header="Interests">
        <p>
          I&apos;m a big nerd with a love for TV/movies, gaming, and tech in
          general. Building things is my jam, including web apps (obviously),
          PCs and mechanical keyboards, but also enjoy most outdoor activities,
          especially fishing, camping, longboarding, and swimming.
        </p>
      </Card>
      <Card header="G'day!">
        <p>
          My name is William Lowe, a fresh aussie frontend developer, and I want
          to work with you!
        </p>
        <img src="profile.jpg" alt="profile picture" />
      </Card>
    </div>
  );
};

export default CardDeck;
