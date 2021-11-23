import play from './playAudio';

export default () => {
  let wrongAnswer_audio = document.querySelector('.wrongAnswer_audio');
  play(wrongAnswer_audio);
};
