import { useEffect, useState } from "react";
import styles from "./Skills.module.css";
import SkillsList from "../../Common/SkillsList";
import checkmarkIconDark from "../../assets/checkmark-dark.svg";
import checkmarkIconLight from "../../assets/checkmark-light.svg";
import { useTheme } from "../../Common/ThemeContext";

const Skills = () => {
  // Get the theme from the theme provider
  const { theme } = useTheme();
  // Set the initial state of the checkmarkIcon
  const [checkmarkIcon, setCheckmarkIcon] = useState(checkmarkIconDark);

  // Use the effect hook to update the checkmarkIcon based on the theme
  useEffect(() => {
    // If the theme is dark, set the checkmarkIcon to checkmarkIconDark
    if (theme === "dark") {
      setCheckmarkIcon(checkmarkIconDark);
      // Otherwise, set the checkmarkIcon to checkmarkIconLight
    } else {
      setCheckmarkIcon(checkmarkIconLight);
    }
  }, [theme]);

  return (
    <section id="Skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillsList src={checkmarkIcon} skill="HTML" />
        <SkillsList src={checkmarkIcon} skill="CSS" />
        <SkillsList src={checkmarkIcon} skill="JavaScript" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillsList src={checkmarkIcon} skill="React" />
        <SkillsList src={checkmarkIcon} skill="Redux" />
        <SkillsList src={checkmarkIcon} skill="Tailwind CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillsList src={checkmarkIcon} skill="Git" />
        <SkillsList src={checkmarkIcon} skill="GitHub" />
        <SkillsList src={checkmarkIcon} skill="Vite" />
      </div>
    </section>
  );
};

export default Skills;
