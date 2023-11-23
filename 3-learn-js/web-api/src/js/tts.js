const speechBtn = document.querySelector("#speechBtn");
const textInput = document.querySelector("#textInput");
const micLoader = document.querySelector("#micLoader");
const micBtn = document.querySelector("#micBtn");

// text to speech
const speechBtnHandler = () => {
  console.log(textInput.value);
  const config = new SpeechSynthesisUtterance(textInput.value);
  config.rate = 0.8;
  config.pitch = 1;
  speechSynthesis.speak(config);
};

micBtn.addEventListener("click", () => {
  // micLoader.classList.toggle("hidden");

  const reg = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)();

  reg.start();

  reg.addEventListener("start", () => {
    console.log("sound record start");
    micLoader.classList.toggle("hidden");
  });

  reg.addEventListener("end", () => {
    console.log("sound record end");
    micLoader.classList.toggle("hidden");
  });

  reg.addEventListener("result", (event) => {
    textInput.value += event.results[0][0].transcript
  });
});

// speech to text (speech recognition)

speechBtn.addEventListener("click", speechBtnHandler);
