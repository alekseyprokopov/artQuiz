export default function (arr, size) {
  const result = [];

  for (let i = 0; i < Math.ceil(arr.length / size); i++) {
    result.push(arr.slice(i * size, i * size + size));
  }

  return result;
}
