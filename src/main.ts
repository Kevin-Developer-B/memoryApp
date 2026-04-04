import './style/style.scss'
import { startScreeTemplate } from './templates/startScreenTemplate';
import { settingScreenTemplate } from './templates/settingScreenTemplate';


init()

function init() {
    const startScreenRef = document.getElementById('startScreen')!;
    if (startScreenRef) {
        startScreenRef.innerHTML = startScreeTemplate();

        const playBtn = document.getElementById('playBtn');
        playBtn?.addEventListener('click', playScreen);
    }

    // const fieldRef = document.getElementById("field");
    // if (fieldRef) {
    //     fieldRef.addEventListener("click", e => {
    //         const card = (e.target as HTMLElement).closest(".card") as HTMLButtonElement
    //         if (card) {
    //             card.classList.toggle("is-flipped")
    //         }
    //     })
    // }
}

function playScreen() {
    const play = document.getElementById('startScreen');
    if (play) {
        play.style.display = "none";
    }

    const settingScreenRef = document.getElementById('settingScreen');
    if (settingScreenRef) {
        settingScreenRef.innerHTML = settingScreenTemplate();
    }
}