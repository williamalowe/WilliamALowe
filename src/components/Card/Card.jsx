import styles from './Card.module.css';

const Card = ({ header, body }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        {header}
      </div>
      <p>
        {body}
      </p>
    </div>
  )
}

export default Card
