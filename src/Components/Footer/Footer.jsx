import "./Footer.css";
import klogo from "../../assets/klogo.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import gmailico from "../../assets/gmail.png";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={klogo} alt="Kishore's Logo" className="logo" />
        </div>
        <div className="footer-top-right">
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
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>&copy; {year} Kishore's Portfolio. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
