const board = document.querySelector("#board");

// const sounds = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"];

// const sounds = {
//   a: "C4",
//   s: "D4",
//   d: "E4",
//   f: "F4",
//   j: "G4",
//   k: "A4",
//   l: "B4",
//   ";": "C5",
// };

const sounds = [
  {
    key: "a",
    sound: "C4",
  },
  {
    key: "s",
    sound: "D4",
  },
  {
    key: "d",
    sound: "E4",
  },
  {
    key: "f",
    sound: "F4",
  },
  {
    key: "j",
    sound: "G4",
  },
  {
    key: "k",
    sound: "A4",
  },
  {
    key: "l",
    sound: "B4",
  },
  {
    key: ";",
    sound: "C5",
  },
];

const createKey = ({ sound }) => {
  const keyBtn = document.createElement("button");
  keyBtn.className =
    "key bg-blue-200 text-blue-600 duration-100 rounded-xl font-mono font-bold active:opacity-75 " +
    sound;
  keyBtn.innerText = sound;
  return keyBtn;
};

const playSound = (keyName) => {
  const audio = new Audio(`./sounds/${keyName}.mp3`);
  audio.play();
};

sounds.forEach((sound) => {
  board.append(createKey(sound));
});

board.addEventListener("click", (event) => {
  if (event.target.classList.contains("key")) {
    playSound(event.target.innerText);
  }
});

document.addEventListener("keyup", (event) => {
  const currentSound = sounds.find((sound) => sound.key === event.key);

  if (currentSound) {
    const currentKey = document.querySelector(`.${currentSound.sound}`);
    currentKey.classList.add("opacity-75");
    currentKey.addEventListener("transitionend", () => {
      currentKey.classList.remove("opacity-75");
    });
    playSound(currentSound.sound);
  }
});
