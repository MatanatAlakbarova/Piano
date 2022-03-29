const cAudio= new Audio("assets/audies/c.wav");
const dAudio= new Audio("assets/audies/d.wav");
const eAudio= new Audio("assets/audies/e.wav");
const fAudio= new Audio("assets/audies/f.wav");
const gAudio= new Audio("assets/audies/g.wav");
const aAudio= new Audio("assets/audies/a.wav");
const bAudio= new Audio("assets/audies/b.wav");

const playSound=audio=>{
 const clone =audio.cloneNode();
 clone.play();
 setTimeout(()=>(clone.volume=0.8),400);
 setTimeout(()=>(clone.volume=0.4),1200);
 setTimeout(()=>(clone.volume=0),2000);
}

const cNote=document.querySelector(".c-note");
const playCNote=()=>{
    playSound(cAudio);
    cNote.classList.add("active");
    setTimeout(()=>cNote.classList.remove("active"),200);
};
cNote.addEventListener("click",playCNote);

const dNote=document.querySelector(".d-note");
const playDNote=()=>{
    playSound(dAudio);
    dNote.classList.add("active");
    setTimeout(()=>dNote.classList.remove("active"),200);
};
dNote.addEventListener("click",playDNote);

const eNote=document.querySelector(".e-note");
const playENote=()=>{
    playSound(eAudio);
    eNote.classList.add("active");
    setTimeout(()=>eNote.classList.remove("active"),200);
};
eNote.addEventListener("click",playENote);

const fNote=document.querySelector(".f-note");
const playFNote=()=>{
    playSound(fAudio);
    fNote.classList.add("active");
    setTimeout(()=>fNote.classList.remove("active"),200);
};
fNote.addEventListener("click",playFNote);

const gNote=document.querySelector(".g-note");
const playGNote=()=>{
    playSound(gAudio);
    gNote.classList.add("active");
    setTimeout(()=>gNote.classList.remove("active"),200);
};
gNote.addEventListener("click",playGNote);

const aNote=document.querySelector(".a-note");
const playANote=()=>{
    playSound(aAudio);
    aNote.classList.add("active");
    setTimeout(()=>aNote.classList.remove("active"),200);
};
aNote.addEventListener("click",playANote);

const bNote=document.querySelector(".b-note");
const playBNote=()=>{
    playSound(bAudio);
    bNote.classList.add("active");
    setTimeout(()=>bNote.classList.remove("active"),200);
};
bNote.addEventListener("click",playBNote);

document.addEventListener("keydown", (e) => {
    switch (e.code) {
        case "KeyC":
            playCNote();
            break;
        case "KeyD":
            playDNote();
            break;
        case "KeyE":
            playENote();
            break;
        case "KeyF":
            playFNote();
            break;
        case "KeyG":
            playGNote();
            break;
        case "KeyA":
            playANote();
            break;
        case "KeyB":
            playBNote();
            break;
    }
})
