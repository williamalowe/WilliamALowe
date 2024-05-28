import { useState } from 'react';
import Background from '../../components/Background/Background';
import styles from './App.module.css';
import Navbar from '../../components/Navbar/Navbar';

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <main className={styles.app} data-theme={isDark ? "dark" : "light"}>
      <div className={styles.bg_wrapper}>
        <Background />
      </div>
      <section className={styles.content}>
        <Navbar />
      </section>
    </main>
  )
}

export default App
