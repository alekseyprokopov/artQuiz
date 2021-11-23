export default function getLocalStorage(object) {
  let result;
  if (localStorage.getItem(object.name)) {
    result = JSON.parse(localStorage.getItem(object.name));
  }
  Object.assign(object, result);
}
