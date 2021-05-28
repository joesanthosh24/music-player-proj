// Audio control buttons
const playButton = document.querySelector(".fa-play");
const nextButton = document.querySelector(".fa-forward");
const prevButton = document.querySelector(".fa-backward");

// Song image and audio
const audio = document.getElementById("audio");
const image = document.getElementById("image");

let playing = false;
const songs = [
  {
    id: 1,
    name: "Gurenge",
    artist: "LISA",
  },
  {
    id: 2,
    name: "Unravel",
    artist: "Ling Toshite Sigure",
  },
];
let currentSong = 1;

const replaceIcon = (element, toReplace, replaceWith) => {
  element.classList.remove(`fa-${toReplace}`);
  element.classList.add(`fa-${replaceWith}`);
};

const playNext = () => {
  console.log("Next");
  if (currentSong === songs.length) {
    console.log(currentSong);
    currentSong = songs[0].id;
  } else {
    console.log(currentSong);
    currentSong++;
  }

  audio.setAttribute("src", `/music/song-${currentSong}.mp3`);
  image.setAttribute("src", `/images/song-${currentSong}.jpeg`);

  console.log(audio);
  console.log(image);
};

playButton.addEventListener("click", () => {
  if (playing) {
    audio.pause();
    replaceIcon(playButton, "pause", "play");
    playing = false;
  } else {
    audio.play();
    replaceIcon(playButton, "play", "pause");
    playing = true;
  }
});

nextButton.addEventListener("click", () => {
  console.log("Click");
  playing = false;
  audio.pause();
  playNext();
  playing = true;
  audio.play();
});
