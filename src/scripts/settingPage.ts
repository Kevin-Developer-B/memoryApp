import { settingPageTemplate } from "../templates/settingPageTemplate";
import { gameState } from "../scripts/states";
import { renderGamePage } from "../scripts/gamePage";

export function renderSettingsPage() {
    showSettingsScreen();
    renderTemplate();
    setupInputs();
    setupStartButton();
}

function showSettingsScreen() {
    const start = document.getElementById('startScreen');
    const setting = document.getElementById('settingScreen');
    const game = document.getElementById('gameScreen');
    const end = document.getElementById('endScreen');

    if (start && setting && game && end) {
        start.style.display = "none";
        setting.style.display = "flex";
        game.style.display = "none";
        end.style.display = "none";
    }
}

function renderTemplate() {
    const settingScreenRef = document.getElementById('settingScreen');
    if (!settingScreenRef) return;

    settingScreenRef.innerHTML = settingPageTemplate();

    gameState.theme = "codeVibes";
    updateThemePreview();
}

function setupInputs() {
    const themeInputs = document.querySelectorAll('input[name="theme"]');
    const playerInputs = document.querySelectorAll('input[name="players"]');
    const cardSizeInputs = document.querySelectorAll('input[name="cardSize"]');

    themeInputs.forEach(input => {
        input.addEventListener("change", () => {
            const selected = document.querySelector('input[name="theme"]:checked') as HTMLInputElement;
            gameState.theme = selected.value as typeof gameState.theme;
            renderPreviewFromState();
        });
    });

    playerInputs.forEach(input => {
        input.addEventListener("change", () => {
            const selected = document.querySelector('input[name="players"]:checked') as HTMLInputElement;
            gameState.playerColor = selected.value as typeof gameState.playerColor;
            renderPreviewFromState();
        });
    });

    cardSizeInputs.forEach(input => {
        input.addEventListener("change", () => {
            const selected = document.querySelector('input[name="cardSize"]:checked') as HTMLInputElement;
            gameState.cardSize = Number(selected.value) as typeof gameState.cardSize;
            renderPreviewFromState();
        });
    });

    document.querySelectorAll('input[type="radio"]').forEach(input => {
        input.addEventListener("change", () => {
            updateStartButtonState();
        });
    });
}

function setupStartButton() {
    const startButton = document.getElementById('startGame');
    startButton?.addEventListener("click", renderGamePage);
}

function updateThemePreview() {
    const outputTheme = document.getElementById("selectedTheme") as HTMLSpanElement;
    const selected = document.querySelector('input[name="theme"]:checked') as HTMLInputElement;

    if (outputTheme && selected) {
        outputTheme.textContent = selected.value;
    }
}

function renderPreviewFromState() {
    const outputTheme = document.getElementById("selectedTheme");
    const outputPlayer = document.getElementById("selectedPlayer");
    const outputSize = document.getElementById("selectedSize");

    if (outputTheme) outputTheme.textContent = gameState.theme;
    if (outputPlayer) outputPlayer.textContent = gameState.playerColor ?? "Player";
    if (outputSize) {
        outputSize.textContent = gameState.cardSize
            ? `Board-${gameState.cardSize} size`
            : "Board size";
    }
}

function updateStartButtonState() {
    const players = document.querySelector('input[name="players"]:checked');
    const size = document.querySelector('input[name="cardSize"]:checked');
    const button = document.getElementById("startGame") as HTMLButtonElement;

    if (!button) return;

    if (players && size) {
        button.disabled = false;
        button.classList.remove("btn-start--disabled");
    } else {
        button.disabled = true;
        button.classList.add("btn-start--disabled");
    }
}