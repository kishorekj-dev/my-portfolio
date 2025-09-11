import "./Title.css";
import theme_pattern from "../../assets/theme_pattern.svg";

function Title({ children }) {
  return (
    <div className="title">
      <h1>{children}</h1>
      <img src={theme_pattern} alt="" />
    </div>
  );
}

export default Title;
