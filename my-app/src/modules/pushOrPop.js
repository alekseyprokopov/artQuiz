export default function (array, uniqArray, prop = 'answer') {
  array.map((item) => {
    for (let i = 0; i < 3; i++) {
      let rand = Math.floor(Math.random() * uniqArray.length);
      rand % 2
        ? item[prop].push(uniqArray[rand])
        : item[prop].unshift(uniqArray[rand]);
    }
  });
}
