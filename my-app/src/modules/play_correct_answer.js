import play from './playAudio';

export default () => {
  let correctAnswer_audio = document.querySelector('.correctAnswer_audio');
  play(correctAnswer_audio);
};
