import styles from "../styles/SkillsList.module.css";

export default function SkillsList() {
  const skills = ["Teamwork", "Ball Handling", "Shooting"];

  return (
    <section className={styles.sklSec}>
      <h3 className={styles.sklTit}>Core Skills</h3>
      <ul className={styles.sklGp}>
        {skills.map((skill, index) => (
          <li key={index} className={styles.sklBlk}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
