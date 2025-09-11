import mywork_data from "../../assets/mywork_data";
import Title from "../Title/Title";
import "./Projects.css";

function Projects() {
  return (
    <div id="projects" className="projects">
      <Title>Projects</Title>

      <div className="projects-container">
        {mywork_data.map((project, index) => {
          return (
            <div key={index} className="project-card">
              <a href={project.p_link} target="_blank" rel="noreferrer">
                <img
                  className="project-image"
                  src={project.p_img}
                  alt={project.p_name}
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
