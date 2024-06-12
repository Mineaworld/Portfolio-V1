const ProjectsCard = ({ src, link, h3, p }) => {
  return (
    //  Add project web or github link
    <a href={link} target="_blank">
      <img src={src} alt={`${h3} logo`} className="hover" />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
};

export default ProjectsCard;
