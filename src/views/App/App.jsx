import { useState } from 'react';
import Background from '../../components/Background/Background';
import styles from './App.module.css';

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <main className={styles.app} data-theme={isDark ? "dark" : "light"}>
      <div className={styles.bg_wrapper}>
        <Background />
      </div>
      <section className={styles.content}>
        <h1>test</h1>
      </section>
    </main>
  )
}

export default App
