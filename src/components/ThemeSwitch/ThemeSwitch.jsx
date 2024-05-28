import styles from './ThemeSwitch.module.css';

const ThemeSwitch = ({ handleClick }) => {
  return (
    <button className={styles.switch} onClick={handleClick}>
      <div></div>
      <div></div>
    </button>
  )
}

export default ThemeSwitch
