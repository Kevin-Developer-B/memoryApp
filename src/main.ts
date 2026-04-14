import './style/style.scss'
import { startScreeTemplate } from './templates/startScreenTemplate';
import { settingScreenTemplate } from './templates/settingScreenTemplate';
import { gameScreenTemplate } from './templates/gameScreenTemplate';
import { Game } from './interfaces';

let gameState: Game = {
    theme: "codeVibes",
};

startGame()

function init() {
    const startScreenRef = document.getElementById('startScreen')!;
    if (startScreenRef) {
        startScreenRef.innerHTML = startScreeTemplate();

        const playBtn = document.getElementById('playBtn');
        playBtn?.addEventListener('click', settingScreen);
    }
}

function settingScreen() {
    const start = document.getElementById('startScreen');
    const setting = document.getElementById('settingScreen');
    const game = document.getElementById('gameScreen');
    
    if (start && setting && game) {
        start.style.display = "none";
        setting.style.display = "flex";
        game.style.display = "none";
    }

    const settingScreenRef = document.getElementById('settingScreen');
    if (settingScreenRef) {
        settingScreenRef.innerHTML = settingScreenTemplate();
        updateThemePreview();
    }

    const themeInputs = document.querySelectorAll('input[name="theme"]');
    const playerInputs = document.querySelectorAll('input[name="players"]');
    const cardSizeInputs = document.querySelectorAll('input[name="cardSize"]');

    themeInputs.forEach(input => {
        input.addEventListener("change", () => {
            const selected = document.querySelector('input[name="theme"]:checked') as HTMLInputElement;
            gameState.theme = selected.value as Game["theme"];
            renderPreviewFromState();
        });
    });

    playerInputs.forEach(input => {
        input.addEventListener("change", () => {
            const selected = document.querySelector('input[name="players"]:checked') as HTMLInputElement;
            gameState.playerColor = selected.value as Game["playerColor"];
            renderPreviewFromState();

        });
    });

    cardSizeInputs.forEach(input => {
        input.addEventListener("change", () => {
            const selected = document.querySelector('input[name="cardSize"]:checked') as HTMLInputElement;
            gameState.cardSize = Number(selected.value) as Game["cardSize"];
            renderPreviewFromState();
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
        startButton.addEventListener("click", startGame);
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

function renderPreviewFromState() {
    const outputTheme = document.getElementById("selectedTheme") as HTMLSpanElement;
    const outputPlayer = document.getElementById("selectedPlayer") as HTMLSpanElement;
    const outputSize = document.getElementById("selectedSize") as HTMLSpanElement;

    outputTheme.textContent = gameState.theme;
    outputPlayer.textContent = gameState.playerColor ?? "Player";
    if (outputSize) {
        outputSize.textContent = gameState.cardSize ? `Board-${gameState.cardSize} size` : "Board size";
    }


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
    const game = document.getElementById('gameScreen');

    if (play && game) {
        play.style.display = "none";
        game.style.display = "flex";
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

    let overlay = document.getElementById('overlay');
    const selectionBtn = document.getElementById('selectionBtn');
    const closeBtn = document.getElementById('closeBtn');
    const exitBtn = document.getElementById('exitBtn');

    overlay?.addEventListener('click', (event) => {
        if (event.target === overlay) {
            closeOverlay();
        }
    })

    selectionBtn?.addEventListener('click', () => {
        overlay?.classList.toggle("open");
        overlay?.classList.remove("closing");
    });

    closeBtn?.addEventListener('click', closeOverlay);
    exitBtn?.addEventListener('click', settingScreen);

    function closeOverlay() {
        let overlay = document.getElementById('overlay');
        if (overlay) {
            overlay.classList.add("closing");

            setTimeout(() => {
                overlay.classList.remove("open");
                overlay.classList.remove("closing");
            }, 500);
        }
    }
}



