import profileimage from "../../assets/profile_img1.JPG";
import resume from "../../assets/KishorekumarKJ_Resume.pdf";
import "./Hero.css";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import gmailico from "../../assets/gmail.png";

function Hero() {
  return (
    <div id="hero" className="hero">
      <img src={profileimage} alt="" className="hero-image" />
      <h1>
        <span>I'm Kishore </span> , Software Engineer specialized in React &
        Next.js.
      </h1>
      <p>
        With 3.2 years of experience, I focus on building scalable,
        user-friendly web applications that solve real-world problems.
      </p>
      <div className="hero-action">
        <a
          href="mailto:kishorekj523@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="hero-connect">Hire me</div>
        </a>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <div className="hero-resume">My resume</div>
        </a>
      </div>
      <div className="link-icons">
        <a
          href="mailto:kishorekj523@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gmailico} alt="Gmail" className="icons" />
        </a>
        <a
          href="https://www.linkedin.com/in/kishore-kumar-kj-5038b7171/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" className="icons" />
        </a>
        <a
          href="https://github.com/kishorekj-dev?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub" className="icons" />
        </a>
      </div>
    </div>
  );
}

export default Hero;
