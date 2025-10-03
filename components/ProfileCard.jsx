import styles from "../styles/ProfileCard.module.css";

export default function ProfileCard() {
  return (
    <section className={styles.infoContainer}>
      <img
        src="Minoza.png"
        alt="Profile Avatar"
        className={styles.avatarPic}
      />
      <h2 className={styles.fullName}>Arjohn Wayne Minoza</h2>
      <p className={styles.ageLine}>Age: 19</p>
      <p className={styles.descriptionLine}>
        Loves staying active through basketball.
      </p>
    </section>
  );
}
