import './style/style.scss'
import { startScreeTemplate } from './templates/startScreenTemplate';
import { settingScreenTemplate } from './templates/settingScreenTemplate';
import { gameScreenTemplate } from './templates/gameScreenTemplate';

interface Game {
    theme: string,
    playerColor?: string,
    cardSize?: number
}

init()

function init() {
    const startScreenRef = document.getElementById('startScreen')!;
    if (startScreenRef) {
        startScreenRef.innerHTML = startScreeTemplate();

        const playBtn = document.getElementById('playBtn');
        playBtn?.addEventListener('click', settingScreen);
    }
}

function settingScreen() {

    const play = document.getElementById('startScreen');
    if (play) {
        play.style.display = "none";
    }

    const settingScreenRef = document.getElementById('settingScreen');
    if (settingScreenRef) {
        settingScreenRef.innerHTML = settingScreenTemplate();
        updateThemePreview();
    }

    const themeInputs = document.querySelectorAll('input[name="theme"]');
    const playerInputs = document.querySelectorAll('input[name="players"]');
    const cardSizeInputs = document.querySelectorAll('input[name="cardSize"]');
    const outputTheme = document.getElementById("selectedTheme") as HTMLSpanElement;
    const outputPlayer = document.getElementById("selectedPlayer") as HTMLSpanElement;
    const outputSize = document.getElementById("selectedSize") as HTMLSpanElement;

    themeInputs.forEach(input => {
        input.addEventListener("change", () => {
            const selected = document.querySelector('input[name="theme"]:checked') as HTMLInputElement;
            outputTheme.textContent = selected.value;
        });
    });

    playerInputs.forEach(input => {
        input.addEventListener("change", () => {
            const selected = document.querySelector('input[name="players"]:checked') as HTMLInputElement;
            outputPlayer.textContent = selected.value;

        });
    });

    cardSizeInputs.forEach(input => {
        input.addEventListener("change", () => {
            const selected = document.querySelector('input[name="cardSize"]:checked') as HTMLInputElement;
            outputSize.textContent = selected.value;
        });
    });

    document.querySelectorAll('input[type="radio"]').forEach(input => {
        input.addEventListener("change", () => {
            updatePreview();
            updateStartButtonState();
        });

    });

    const startButton = document.getElementById('startGame');
    if (startButton) {
        startButton.addEventListener ("click", startGame);
    }

}

function updateThemePreview() {
    const outputTheme = document.getElementById("selectedTheme") as HTMLSpanElement;
    const selected = document.querySelector('input[name="theme"]:checked') as HTMLInputElement;
    outputTheme.textContent = selected.value;
}


function updatePreview() {
    updateThemePreview()
    const theme = (document.querySelector('input[name="theme"]:checked') as HTMLInputElement)?.value;
    const players = (document.querySelector('input[name="players"]:checked') as HTMLInputElement)?.value;
    const size = (document.querySelector('input[name="cardSize"]:checked') as HTMLInputElement)?.value;

    console.log({ theme, players, size });
}

function updateStartButtonState() {
    const players = document.querySelector('input[name="players"]:checked');
    const size = document.querySelector('input[name="cardSize"]:checked')
    const button = document.getElementById("startGame") as HTMLButtonElement;

    if (players && size) {

        button.disabled = false;
        button.classList.remove("btn-start--disabled")
    } else {
        button.disabled = true;
        button.classList.add("btn-start--disabled")
    }
}

function startGame() {
    const play = document.getElementById('settingScreen');
    if (play) {
        play.style.display = "none";
    }

    const gameScreenRef = document.getElementById('gameScreen');
    if (gameScreenRef) {
        gameScreenRef.innerHTML = gameScreenTemplate();
    }

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