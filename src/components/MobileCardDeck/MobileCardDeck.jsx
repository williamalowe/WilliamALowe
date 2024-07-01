import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../Card/Card";
import styles from "./MobileCardDeck.module.css";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MobileCardDeck = () => {
  const [displayCard, setDisplayCard] = useState(0);

  const nextCard = () => {
    if (displayCard === 3) {
      setDisplayCard(0);
    } else {
      setDisplayCard(displayCard + 1);
    }
  };

  return (
    <div className={styles.mobileCardDeck}>
      <div className={styles.content}>
        <div className={styles.cards}>
          <AnimatePresence mode="popLayout">
            {displayCard === 0 && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: 20,
                }}
              >
                <Card header="G'day!">
                  <p>
                    My name is William Lowe, a fresh aussie frontend developer,
                    and I want to work with you!
                  </p>
                  <img src="profile.jpg" alt="profile picture" />
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence mode="popLayout">
            {displayCard === 1 && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: 20,
                }}
              >
                <Card header="Interests">
                  <p>
                    I&apos;m a big nerd with a love for TV/movies, gaming, and
                    tech in general. Building things is my jam, including web
                    apps (obviously), PCs and mechanical keyboards, but also
                    enjoy most outdoor activities, especially fishing, camping,
                    longboarding, and swimming.
                  </p>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence mode="popLayout">
            {displayCard === 2 && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: 20,
                }}
              >
                <Card header="Experience">
                  <p>
                    Proficient in HTML, CSS, JavaScript, and React, I am soon to
                    graduate from Deakin University with a Degree in Computer
                    Science. I enjoy the process of learning and enjoy the
                    challenege of tackling new technologies to creatively solve
                    various problems. I also have extensive work experience,
                    having worked in agriculture, hospitality, and social/market
                    research.
                  </p>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence mode="popLayout">
            {displayCard === 3 && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: 20,
                }}
              >
                <Card header="Goals">
                  <p>
                    While continually practicing the fundamentals, my next
                    learning goals include transitioning to Next.js and
                    TypeScript, and diving deeper into Mongo, Express, Node,
                    Jest, and Vitest to ensure I have a robust and versatile
                    skillset. After some time, I also aim to upskill,
                    transitioning from frontend into a full stack developement.
                  </p>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
          <div className={styles.quickNav}>
            <button onClick={() => setDisplayCard(0)}>
              <AnimatePresence>
                {displayCard === 0 && (
                  <motion.div
                    className={styles.fill}
                    initial={{
                      width: 0,
                      height: 0,
                    }}
                    animate={{
                      width: "100%",
                      height: "100%",
                    }}
                    exit={{
                      width: 0,
                      height: 0,
                    }}
                  />
                )}
              </AnimatePresence>
            </button>
            <button onClick={() => setDisplayCard(1)}>
              <AnimatePresence>
                {displayCard === 1 && (
                  <motion.div
                    className={styles.fill}
                    initial={{
                      width: 0,
                      height: 0,
                    }}
                    animate={{
                      width: "100%",
                      height: "100%",
                    }}
                    exit={{
                      width: 0,
                      height: 0,
                    }}
                  />
                )}
              </AnimatePresence>
            </button>
            <button onClick={() => setDisplayCard(2)}>
              <AnimatePresence>
                {displayCard === 2 && (
                  <motion.div
                    className={styles.fill}
                    initial={{
                      width: 0,
                      height: 0,
                    }}
                    animate={{
                      width: "100%",
                      height: "100%",
                    }}
                    exit={{
                      width: 0,
                      height: 0,
                    }}
                  />
                )}
              </AnimatePresence>
            </button>
            <button onClick={() => setDisplayCard(3)}>
              <AnimatePresence>
                {displayCard === 3 && (
                  <motion.div
                    className={styles.fill}
                    initial={{
                      width: 0,
                      height: 0,
                    }}
                    animate={{
                      width: "100%",
                      height: "100%",
                    }}
                    exit={{
                      width: 0,
                      height: 0,
                    }}
                  />
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        <motion.button
          onClick={() => nextCard()}
          initial={{ x: 0 }}
          animate={{ x: 10 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <FontAwesomeIcon icon={faRightLong} />
        </motion.button>
      </div>
    </div>
  );
};

export default MobileCardDeck;
