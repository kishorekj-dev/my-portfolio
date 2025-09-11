import "./Skills.css";

import Services_Data from "../../assets/services_data";
import Title from "../Title/Title";

function Skills() {
  return (
    <div id="skills" className="skills">
      <Title>My Skills</Title>
      <div className="skills-container">
        {Services_Data.map((skill, index) => {
          return (
            <div key={index} className="skill-card">
              <img
                className="skill-image"
                src={skill.s_img}
                alt={skill.s_name}
              />
              <h3>{skill.s_name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
