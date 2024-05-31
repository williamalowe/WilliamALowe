import styles from './Header.module.css';

const Header = ({ bodyText, highlightText, fontSize }) => {
  return (
    <div className={styles.header} style={{fontSize: fontSize}}>
      <h3>{bodyText}</h3>
      <div className={styles.animate}>
        <span hidden={true}>{highlightText}</span>
        <span>{highlightText}</span>
        <span hidden={true}>{highlightText}</span>
      </div>
    </div>
  )
}

export default Header
