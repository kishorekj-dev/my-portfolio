import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import klogo from "../../assets/klogo.png";
import menuopen from "../../assets/menu_open.svg";
import menuclose from "../../assets/menu_close.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import gmailico from "../../assets/gmail.png";

function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const menuRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "contact"];
      let current = "hero";

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop - 150; // adjust for navbar height
          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuOpen = () => {
    menuRef.current.style.right = "0";
  };
  const menuClose = () => {
    menuRef.current.style.right = "-370px";
  };
  return (
    <div className="navbar">
      <img
        className="logo"
        src={klogo}
        alt="logo"
        onClick={() => window.location.reload(true)}
      />
      <img
        src={menuopen}
        alt="Menu Open"
        className="nav-mob-open"
        onClick={menuOpen}
      />
      <ul className="nav-menu" ref={menuRef}>
        <img
          src={menuclose}
          alt="Menu Close"
          className="nav-mob-close"
          onClick={menuClose}
        />
        <li>
          <AnchorLink
            className={`anchor-link ${
              activeSection === "hero" ? "active" : ""
            }`}
            href="#hero"
            offset={100}
          >
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className={`anchor-link ${
              activeSection === "about" ? "active" : ""
            }`}
            href="#about"
          >
            About Me
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className={`anchor-link ${
              activeSection === "skills" ? "active" : ""
            }`}
            href="#skills"
            offset={100}
          >
            Skills
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className={`anchor-link ${
              activeSection === "projects" ? "active" : ""
            }`}
            href="#projects"
          >
            Projects
          </AnchorLink>
        </li>
        {/* <li>
          <AnchorLink
            className={`anchor-link ${
              activeSection === "achievements" ? "active" : ""
            }`}
            href="#achievements"
            offset={50}
          >
            Achievements
          </AnchorLink>
        </li> */}
        <li>
          <AnchorLink
            className={`anchor-link ${
              activeSection === "contact" ? "active" : ""
            }`}
            href="#contact"
            offset={90}
          >
            Contact
          </AnchorLink>
        </li>
      </ul>

      <div className="nav-right">
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
        {/* <div className="nav-connect">
          <AnchorLink href="#contact" offset={90}>
            Contact me
          </AnchorLink>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
