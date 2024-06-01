import styles from './Card.module.css';

const Card = ({ header, children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        {header}
      </div>
        {children}
    </div>
  )
}

export default Card
