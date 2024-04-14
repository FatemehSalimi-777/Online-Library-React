import styles from "./Layout.module.css";

function Layaout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Online Library</h1>
        <p>
          <a href="https://github.com/FatemehSalimi-777">Fatemeh Salimi</a> |
          Web Developer
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Fatemeh from 🌎</p>
      </footer>
    </>
  );
}

export default Layaout;
