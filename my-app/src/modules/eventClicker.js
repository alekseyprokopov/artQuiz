export default (classes, func) => {
  let a;
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains(classes)) func();
    a = event.target;
  });
  return a;
};
