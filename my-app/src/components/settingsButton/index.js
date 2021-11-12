import settingsDiv from "./index.html";
import "./index.scss";
import htmlToElement from "../../modules/htmlToElement";

const settingsButton = ({ onClick}) => {
  const buttonElement = htmlToElement(settingsDiv);
  buttonElement.addEventListener("click", onClick);
  return buttonElement;
};

export default settingsButton;
