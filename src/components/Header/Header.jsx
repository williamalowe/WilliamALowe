import styles from './Header.module.css';

const Header = ({ bodyText, highlightText }) => {
  return (
    <div className={styles.header}>
      <h3>{bodyText}</h3>
      <div className={styles.animated}>
        <h3>{highlightText}</h3>
      </div>
    </div>
  )
}

export default Header
