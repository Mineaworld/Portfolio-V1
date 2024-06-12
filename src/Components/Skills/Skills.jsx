import styles from "./Skills.module.css";
import SkillsList from "../../Common/SkillsList";
import checkmarkIconDark from "../../assets/checkmark-dark.svg";
import checkmarkIconLight from "../../assets/checkmark-light.svg";

const Skills = () => (
  <section id="Skills" className={styles.container}>
    <h1 className="sectionTitle">Skills</h1>
    <div className={styles.skillList}>
      <SkillsList src={checkmarkIconDark} skill="HTML" />
      <SkillsList src={checkmarkIconDark} skill="CSS" />
      <SkillsList src={checkmarkIconDark} skill="JavaScript" />
    </div>
    <hr />
    <div className={styles.skillList}>
      <SkillsList src={checkmarkIconDark} skill="React" />
      <SkillsList src={checkmarkIconDark} skill="Redux" />
      <SkillsList src={checkmarkIconDark} skill="Tailwind CSS" />
    </div>
    <hr />
    <div className={styles.skillList}>
      <SkillsList src={checkmarkIconDark} skill="Git" />
      <SkillsList src={checkmarkIconDark} skill="GitHub" />
      <SkillsList src={checkmarkIconDark} skill="Vite" />
    </div>
  </section>
);

export default Skills;
