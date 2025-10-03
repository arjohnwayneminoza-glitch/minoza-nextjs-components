import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.tBanner}>
      <h1 className={styles.mHead}>My Profile</h1>
      <h2 className={styles.sHead}>Arjohn Wayne Minoza</h2>
    </header>
  );
}
