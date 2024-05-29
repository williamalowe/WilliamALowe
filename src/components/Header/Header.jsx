import styles from './Header.module.css';

const Header = ({ bodyText, highlightText }) => {
  return (
    <div className={styles.header}>
      <h3>{bodyText}</h3>
      <div className={styles.animate}>
        <span hidden="true">{highlightText}</span>
        <span>{highlightText}</span>
        <span hidden="true">{highlightText}</span>
      </div>
    </div>
  )
}

export default Header
