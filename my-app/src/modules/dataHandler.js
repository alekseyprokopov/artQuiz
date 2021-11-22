import pushOrPop from './pushOrPop';
import arrayToChunk from './arrayToChunk';
import Quiz from '../components/classes/quiz';
import Category from '../components/classes/category';
import Question from '../components/classes/question';

export default function handler(data) {
  let images = data.images;

  let questionAuthor = [];
  let questionPicture = [];

  //разделение данных на две викторины
  images.map((item, index, array) =>
    index > (array.length - 1) / 2
      ? questionAuthor.push({ ...item, type: 'author', answers: [item.author] })
      : questionPicture.push({
          ...item,
          type: 'name',
          answers: [item.imageNum],
        })
  );

  //создание уникальных ответов
  const uniqAnswersByAuthor = [
    ...new Set(questionAuthor.map((item) => item.author)),
  ];
  const uniqAnswersByPicture = [
    ...new Set(questionAuthor.map((item) => item.imageNum)),
  ];

  //добавление унакальных ответов в массивы
  pushOrPop(questionAuthor, uniqAnswersByAuthor, 'answers');
  pushOrPop(questionPicture, uniqAnswersByPicture, 'answers');

  //разбивка на категории по 10 вопросов

  let result = {
    author: arrayToChunk(questionAuthor, 10),
    imageNum: arrayToChunk(questionPicture, 10),
  };

  function createCategory(type) {
    //получение данных
    let data = result[type];

    //создание викторины
    let categories = [];
    data.forEach((item) => {
      let questions = [];

      for (let i = 0; i < item.length; i++) {
        let choices = item[i].answers;
        let answer = item[i][type];
        let num = item[i].imageNum;
        let name = item[i].name;
        let author = item[i].author;
        let year = item[i].year;

        questions.push(new Question(choices, answer, num, name, author, year));
      }
      categories.push(new Category(questions));
    });
    const quizObject = new Quiz(categories);
    return categories;
  }

  let artistData = createCategory('author');
  let pictureData = createCategory('imageNum');
  return { artistData, pictureData };
}
