// Audio control buttons
const playButton = document.querySelector(".fa-play");
const nextButton = document.querySelector(".fa-forward");
const prevButton = document.querySelector(".fa-backward");

// Song image and audio
const audio = document.getElementById("audio");
const image = document.getElementById("image");

// Song name and artist
const songName = document.querySelector(".songContent>h3");
const songArtist = document.querySelector(".songContent>p>span");

// Progress Bar
const progressBar = document.querySelector(".progressBar");

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
  {
    id: 3,
    name: "Zero",
    artist: "Kensho Ono",
  },
  {
    id: 4,
    name: "Can Do",
    artist: "Granrodeo",
  },
];
let currentSong = 1;

const replaceIcon = (element, toReplace, replaceWith) => {
  element.classList.remove(`fa-${toReplace}`);
  element.classList.add(`fa-${replaceWith}`);
};

const setSong = (songNo) => {
  audio.setAttribute("src", `./music/song-${songNo}.mp3`);
  image.setAttribute("src", `./images/song-${songNo}.jpeg`);
  songName.textContent = songs[songNo - 1].name;
  songArtist.textContent = songs[songNo - 1].artist;
};

const playNext = () => {
  replaceIcon(playButton, "play", "pause");
  if (currentSong === songs.length) {
    currentSong = songs[0].id;
  } else {
    currentSong++;
  }

  setSong(currentSong);
};

const playPrev = () => {
  replaceIcon(playButton, "play", "pause");
  if (currentSong === 1) {
    currentSong = songs[songs.length - 1].id;
  } else {
    currentSong--;
  }

  setSong(currentSong);
};

const updateProgress = (event) => {
  if (playing) {
    const { duration, currentTime } = event.srcElement;

    progressBar.style.width = `${(currentTime / duration) * 100}%`;
  }
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
  playing = false;
  audio.pause();
  playNext();
  playing = true;
  audio.play();
});

prevButton.addEventListener("click", () => {
  playing = false;
  audio.pause();
  playPrev();
  playing = true;
  audio.play();
});

audio.onended = function () {
  playing = false;
  playNext();
  playing = true;
  audio.play();
};

audio.addEventListener("timeupdate", updateProgress);
