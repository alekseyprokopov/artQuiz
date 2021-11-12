import "./button.scss";

const button = ({ onClick, title, className }) => {
  const buttonElement = document.createElement("button");
  buttonElement.classList.add("button");
  buttonElement.addEventListener("click", onClick);
  buttonElement.innerHTML = title;
  buttonElement.classList.add(className);

  return buttonElement;
};

export default button;
