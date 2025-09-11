import about_profile from "../../assets/about_profile.JPG";
import Title from "../Title/Title";
import "./About.css";
function About() {
  return (
    <div id="about" className="about">
      <Title>About Me</Title>
      <div className="about-sections">
        <div className="about-left">
          <img className="about-profile" src={about_profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a skilled Frontend Developer with three years of professional
              experience in building modern, user-friendly, and scalable
              applications. During this time, I have collaborated with reputable
              organizations, contributing to project success.
            </p>
            <p>
              My passion for frontend development is reflected in my technical
              expertise, problem-solving ability, and the dedication I bring to
              every project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>Git & GitHub</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3.2+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>7+</h1>
          <p>Projects</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>6</h1>
          <p>Hackathons</p>
        </div>
      </div>
    </div>
  );
}

export default About;
