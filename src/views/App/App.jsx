import { useState } from 'react';
import Background from '../../components/Background/Background';
import styles from './App.module.css';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import ThemeSwitch from '../../components/ThemeSwitch/ThemeSwitch';

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <main className={styles.app} data-theme={isDark ? "dark" : "light"}>
      <div className={styles.bg_wrapper}>
        <Background />
      </div>
      <section className={styles.content}>
        <Navbar />
        <div className={styles.page_view}>
          <div className={styles.output}>
            <Outlet />
          </div>
        </div>
        <ThemeSwitch 
          handleClick={() => setIsDark(!isDark)}
        />
      </section>
    </main>
  )
}

export default App
