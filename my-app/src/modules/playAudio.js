export default function play(audio) {
  audio.pause();
  audio.currentTime = 0;
  audio.play();
}
