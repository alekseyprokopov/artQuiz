export default function setLocalStorage(object) {
  localStorage.setItem(object.name, JSON.stringify(object));
}
