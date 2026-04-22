import { settingPageTemplate } from "../templates/settingPageTemplate";
import { gameState } from "../scripts/states";
import { renderGamePage } from "../scripts/gamePage";

/**
 * Renders the settings page and initializes all UI components and listeners.
*/
export function renderSettingsPage() {
    showSettingsScreen();
    renderTemplate();
    setupInputs();
    setupStartButton();
}

/**
 * Displays the settings screen and hides all other screens.
*/
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

/**
 * Injects the settings page template into the DOM and initializes default theme preview.
*/
function renderTemplate() {
    const settingScreenRef = document.getElementById('settingScreen');
    if (!settingScreenRef) return;
    settingScreenRef.innerHTML = settingPageTemplate();
    gameState.theme = "codeVibes";
    updateThemePreview();
}

/**
 * Sets up input listeners to update the game state and preview on change.
*/
function setupInputs() {
    const bind = (name: string, setter: (v: string) => void) =>
        document.querySelectorAll(`input[name="${name}"]`).forEach(input =>
            input.addEventListener("change", () => {
                const selected = document.querySelector(`input[name="${name}"]:checked`) as HTMLInputElement;
                setter(selected.value);
                renderPreviewFromState();
            })
        );

    bind("theme", v => gameState.theme = v as typeof gameState.theme);
    bind("players", v => gameState.playerColor = v as typeof gameState.playerColor);
    bind("cardSize", v => gameState.cardSize = Number(v) as typeof gameState.cardSize);

    document.querySelectorAll('input[type="radio"]').forEach(input =>
        input.addEventListener("change", updateStartButtonState)
    );
}

/**
 * Attaches a click event to the start button to render the game page.
*/
function setupStartButton() {
    const startButton = document.getElementById('startGame');
    startButton?.addEventListener("click", renderGamePage);
}

/**
 * Updates the displayed theme preview based on the selected input.
*/
function updateThemePreview() {
    const outputTheme = document.getElementById("selectedTheme") as HTMLSpanElement;
    const selected = document.querySelector('input[name="theme"]:checked') as HTMLInputElement;
    if (outputTheme && selected) {
        outputTheme.textContent = selected.value;
    }
}

/**
 * Updates the preview display using the current game state values.
*/
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

/**
 * Enables or disables the start button depending on required selections.
*/
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