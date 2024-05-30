import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Accordion.module.css";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ alignment, title, children }) => {
  const [showContent, setShowContent] = useState(false);
  const headerRef = useRef(null);
  const svgRef = useRef(null);

  if (showContent) {
    svgRef.current.style.transform = "rotate(180deg)";
  }

  useEffect(() => {
    if (alignment === "left") {
      headerRef.current.style.flexDirection = "row-reverse";
      svgRef.current.style.marginRight = "auto";
      if (showContent) {
        svgRef.current.style.transform = "rotate(-180deg)";
      } else {
        svgRef.current.style.transform = "rotate(0deg)";
      }
    } else {
      svgRef.current.style.marginLeft = "auto";
      if (showContent) {
        svgRef.current.style.transform = "rotate(180deg)";
      } else {
        svgRef.current.style.transform = "rotate(0deg)";
      }
    }
    
  }, [showContent]);

  return (
    <div className={styles.accordion}>
      <div
        className={styles.header}
        onClick={() => setShowContent(!showContent)}
        ref={headerRef}
      >
        <h5>{title}</h5>
        <FontAwesomeIcon icon={faArrowDown} ref={svgRef} />
      </div>
      <AnimatePresence>
        {showContent && (
          <motion.div
            className={styles.content}
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: 100,
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
