import styles from "./Hero.module.css";
import heroimage from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../Common/ThemeContext";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twittericon = theme === "light" ? twitterLight : twitterDark;
  const githubicon = theme === "light" ? githubLight : githubDark;
  const linkedinicon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="Hero" className={styles.container}>
      <div className={styles.ColorModeConrainer}>
        <img src={heroimage} alt="Profile" className={styles.hero} />
        <img
          src={themeIcon}
          alt="colormodeicon"
          className={styles.colormode}
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Dy Minea</h1>
        <h2>Front-End Developer</h2>
        <span>
          <a href="https://x.com/Minea_Blue" target="_blank">
            ​<img src={twittericon} alt="twittericon" />
          </a>
          <a href="https://github.com/Mineaworld" target="_blank">
            ​
            <img src={githubicon} alt="githubicon" />
          </a>
          <a
            href="https://www.linkedin.com/in/mineady-dev?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWqfpH2YsTtiqmgxLhNervw%3D%3D"
            target="_blank"
          >
            ​<img src={linkedinicon} alt="linkedinicon" />
          </a>
        </span>
        <p className={styles.des}>
          Building the future of websites with the modern cutting-edge
          technologies web apps.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
