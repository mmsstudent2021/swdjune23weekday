const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const repeatBtn = document.querySelector("#repeatBtn");

const fileUrl = "./audio/to_the_bone.mp3";


const audio = new Audio(fileUrl);

audio.addEventListener("play",() => {
    console.log("U play the song");
})

audio.addEventListener("pause",() => {
    console.log("U pause the song");
})


repeatBtn.addEventListener("click",() => {
    console.log("repeat the song");
    audio.addEventListener("ended",() => {
        audio.play()
    })
})


playBtn.addEventListener("click",() => {
    audio.play()
})

pauseBtn.addEventListener("click",() => {
    audio.pause()
})

// console.log(audio);