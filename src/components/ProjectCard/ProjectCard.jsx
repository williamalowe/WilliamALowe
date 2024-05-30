import { useEffect, useRef } from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ alignment }) => {
  const cardRef = useRef(null);
  
  useEffect(() => {
    if (alignment === 'left') {
      cardRef.current.style.flexDirection = 'row';
    } else {
      cardRef.current.style.flexDirection = 'row-reverse';
    }
  }, [])
  return (
    <div className={styles.card} ref={cardRef}>
      <div className={styles.description}>
        {/* upper */}
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam fugit, voluptatem natus illo molestias delectus nisi. Exercitationem delectus hic, explicabo odio dolores praesentium culpa, doloremque iusto provident voluptates officia nemo.
        </div>
        {/* lower */}
        <div className={styles.lists}>
          {/* lower-left */}
          <div className={styles.stack}>
            <h5>Technologies</h5>
            <ul>
              <li>A</li>
              <li>B</li>
              <li>C</li>
              <li>D</li>
            </ul>
          </div>
          {/* lower-right */}
          <div className={styles.future}>
            <h5>Future Iterations</h5>
            <ul>
              <li>A</li>
              <li>B</li>
              <li>C</li>
              <li>D</li>
            </ul>
          </div>
        </div>
        {/* links */}
        <div className={styles.links}>
          <a href="#">Repo Link</a>
          <a href="#">Demo Link</a>
        </div>
      </div>
      <div className={styles.img}>
        <img src="https://thumbs.dreamstime.com/b/beautiful-woman-lies-wild-flowers-field-reading-book-summer-holiday-rest-education-concept-horizontal-imagee-269649159.jpg" alt="" />
      </div>
    </div>
  )
}

export default ProjectCard
