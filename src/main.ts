import './style/style.scss'
import { startScreeTemplate } from './templates/startScreenTemplate';
import { settingScreenTemplate } from './templates/settingScreenTemplate';
import { gameScreenTemplate } from './templates/gameScreenTemplate';
import { Game } from './interfaces';

let gameState: Game = {
    theme: "codeVibes",
};

init()

// function init() {
//     const startScreenRef = document.getElementById('startScreen')!;
//     if (startScreenRef) {
//         startScreenRef.innerHTML = startScreeTemplate();

//         const playBtn = document.getElementById('playBtn');
//         playBtn?.addEventListener('click', settingScreen);
//     }
// }

// function init() {

//     const play = document.getElementById('startScreen');
//     if (play) {
//         play.style.display = "none";
//     }

//     const settingScreenRef = document.getElementById('settingScreen');
//     if (settingScreenRef) {
//         settingScreenRef.innerHTML = settingScreenTemplate();
//         updateThemePreview();
//     }

//     const themeInputs = document.querySelectorAll('input[name="theme"]');
//     const playerInputs = document.querySelectorAll('input[name="players"]');
//     const cardSizeInputs = document.querySelectorAll('input[name="cardSize"]');

//     themeInputs.forEach(input => {
//         input.addEventListener("change", () => {
//             const selected = document.querySelector('input[name="theme"]:checked') as HTMLInputElement;
//             gameState.theme = selected.value as Game["theme"];
//             renderPreviewFromState();
//         });
//     });

//     playerInputs.forEach(input => {
//         input.addEventListener("change", () => {
//             const selected = document.querySelector('input[name="players"]:checked') as HTMLInputElement;
//             gameState.playerColor = selected.value as Game["playerColor"];
//             renderPreviewFromState();

//         });
//     });

//     cardSizeInputs.forEach(input => {
//         input.addEventListener("change", () => {
//             const selected = document.querySelector('input[name="cardSize"]:checked') as HTMLInputElement;
//             gameState.cardSize = Number(selected.value) as Game["cardSize"];
//             renderPreviewFromState();
//         });
//     });

//     document.querySelectorAll('input[type="radio"]').forEach(input => {
//         input.addEventListener("change", () => {
//             updatePreview();
//             updateStartButtonState();
//         });

//     });

//     const startButton = document.getElementById('startGame');
//     if (startButton) {
//         startButton.addEventListener("click", startGame);
//     }

// }

// function updateThemePreview() {
//     const outputTheme = document.getElementById("selectedTheme") as HTMLSpanElement;
//     const selected = document.querySelector('input[name="theme"]:checked') as HTMLInputElement;
//     outputTheme.textContent = selected.value;
// }


// function updatePreview() {
//     updateThemePreview()
//     const theme = (document.querySelector('input[name="theme"]:checked') as HTMLInputElement)?.value;
//     const players = (document.querySelector('input[name="players"]:checked') as HTMLInputElement)?.value;
//     const size = (document.querySelector('input[name="cardSize"]:checked') as HTMLInputElement)?.value;

//     console.log({ theme, players, size });
// }

// function renderPreviewFromState() {
//     const outputTheme = document.getElementById("selectedTheme") as HTMLSpanElement;
//     const outputPlayer = document.getElementById("selectedPlayer") as HTMLSpanElement;
//     const outputSize = document.getElementById("selectedSize") as HTMLSpanElement;

//     outputTheme.textContent = gameState.theme;
//     outputPlayer.textContent = gameState.playerColor ?? "Player";
//     if (outputSize) {
//         outputSize.textContent = gameState.cardSize ? `Board-${gameState.cardSize} size` : "Board size";
//     }


// }

// function updateStartButtonState() {
//     const players = document.querySelector('input[name="players"]:checked');
//     const size = document.querySelector('input[name="cardSize"]:checked')
//     const button = document.getElementById("startGame") as HTMLButtonElement;

//     if (players && size) {

//         button.disabled = false;
//         button.classList.remove("btn-start--disabled")
//     } else {
//         button.disabled = true;
//         button.classList.add("btn-start--disabled")
//     }
// }

function init() {
    const play = document.getElementById('settingScreen');
    if (play) {
        play.style.display = "none";
    }

    const gameScreenRef = document.getElementById('gameScreen');
    if (gameScreenRef) {
        gameScreenRef.innerHTML = gameScreenTemplate();
        applyTheme();
    }

    const fieldRef = document.getElementById("field");
    if (fieldRef) {
        fieldRef.addEventListener("click", e => {
            const card = (e.target as HTMLElement).closest(".card") as HTMLButtonElement
            if (card) {
                card.classList.toggle("is-flipped")
            }
        })
    }

    function applyTheme() {
        let theme = document.getElementById("gameScreen");
        if (!theme) return; 

        theme.classList = gameState.theme === "gaming" ? "gaming-theme" : "codeVibes-theme";
    }
}



