import styles from "./Projects.module.css";
import ProjectsCard from "../../Common/ProjectsCard";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitile">Projects</h1>
      <div className={styles.projectsContainer}></div>
      {/* Add project web or github link */}
      <div className={styles.projectContainer}>
        <ProjectsCard
          src={viberr}
          link="https://www.viber.com/"
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectsCard
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
        <ProjectsCard src={hipsster} link="" h3="Hipsster" p="Glasses Shop" />
      </div>
    </section>
  );
}

export default Projects;
