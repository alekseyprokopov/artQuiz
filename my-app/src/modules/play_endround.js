import play from './playAudio';

export default () => {
  let endround_audio = document.querySelector('.endround_audio');
  play(endround_audio);
};
