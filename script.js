const playButton = document.querySelector(".fa-play");
const audio = document.getElementById("audio");
const image = document.getElementById("image");

let playing = false;
let songs = 2;

function replace(element, toReplace, replaceWith) {
  element.classList.remove(`fa-${toReplace}`);
  element.classList.add(`fa-${replaceWith}`);
}

playButton.addEventListener("click", () => {
  if (playing) {
    audio.pause();
    replace(playButton, "pause", "play");
    playing = false;
  } else {
    audio.play();
    replace(playButton, "play", "pause");
    playing = true;
  }
});
