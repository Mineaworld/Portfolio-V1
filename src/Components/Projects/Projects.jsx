import styles from "./Projects.module.css";
import ProjectsCard from "../../Common/ProjectsCard";
import bank from "../../assets/Bank.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}></div>
      {/* Add project web or github link */}
      <div className={styles.projectContainer}>
        <ProjectsCard src={bank} link="" h3="HooBank" p="Banking website" />
        {/* <ProjectsCard
          src={freshBurger}
          link=""
          h3="FreshBurger"
          p="Hamburger Restaurant"
        />
        <ProjectsCard
          src={fitLift}
          link=""
          h3="FitLift"
          p="Fitness web application"
        />
        <ProjectsCard src={hipsster} link="" h3="Hipsster" p="Glasses Shop" /> */}
      </div>
    </section>
  );
}

export default Projects;
