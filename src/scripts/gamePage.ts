import { gamePageTemplate } from "../templates/gamePageTemplate";
import { checkGameEnd } from "./endPage";
import { renderSettingsPage } from "./settingPage";
import { gameState, matchState, Card } from "./states";

let cards: Card[] = [];
let size = gameState.cardSize ?? 16;
cards = shuffle(createPairs(size));
let firstCard: HTMLButtonElement | null = null;
let secondCard: HTMLButtonElement | null = null;
let lockBoard = false;

/**
 * Renders the full game page including screen, template, game setup and overlay.
*/
export function renderGamePage() {
    showGameScreen();
    renderTemplate();
    setupGame();
    initOverlay();
}

/**
 * Switches from the settings screen to the game screen.
*/
function showGameScreen() {
    const play = document.getElementById('settingScreen');
    const game = document.getElementById('gameScreen');
    if (play && game) {
        play.style.display = "none";
        game.style.display = "flex";
    }
}

/**
 * Renders the game template and initializes UI-related state.
*/
function renderTemplate() {
    const gameScreenRef = document.getElementById('gameScreen');
    if (!gameScreenRef) return;
    gameScreenRef.innerHTML = gamePageTemplate();
    applyTheme();
    resetMatchState();
    displayScore();
    displayCurrentPlayer();
}

/**
 * Initializes the game logic, cards and board state.
*/
function setupGame() {
    matchState.currentPlayer = gameState.playerColor;
    const size = gameState.cardSize ?? 16;
    cards = shuffle(createPairs(size));
    renderBoard(cards, size);
}

/**
 * Renders all cards onto the game board and attaches click handler.
*/
function renderBoard(cards: Card[], size: number) {
    const fieldRef = document.getElementById("field");
    if (!fieldRef) return;
    cards.forEach(card => fieldRef.appendChild(createCardElement(card)));
    updateGridClass(fieldRef, size);
    fieldRef.addEventListener("click", handleCardClick);
}

/**
 * Creates a DOM element for a single card.
*/
function createCardElement(card: Card): HTMLButtonElement {
    const button = document.createElement("button");
    button.classList.add("card");
    button.dataset.id = card.id.toString();
    button.dataset.value = card.value;
    button.innerHTML = getCardTemplate(card);
    return button;
}

/**
 * Returns the HTML template for a card.
*/
function getCardTemplate(card: Card): string {
    return `
        <div class="card__inner">
            <div class="card__face card__face--back"></div>
            <div class="card__face card__face--front">
                <img src="../../../public/assets/img/Themes/${gameState.theme}/${card.value}.png" alt="${card.value}">
            </div>
        </div>
    `;
}

/**
 * Updates the grid layout class based on board size.
*/
function updateGridClass(fieldRef: HTMLElement, size: number) {
    fieldRef.classList.remove("grid-16", "grid-24", "grid-32");
    if (size === 16) fieldRef.classList.add("grid-16");
    if (size === 24) fieldRef.classList.add("grid-24");
    if (size === 36) fieldRef.classList.add("grid-32");
}

/**
 * Handles card click events and controls game flow.
*/
function handleCardClick(e: Event) {
    const target = e.target as HTMLElement;
    const card = target.closest(".card") as HTMLButtonElement | null;
    if (!card || lockBoard || card.classList.contains("is-flipped")) return;
    flipCard(card);
    if (!firstCard) {
        firstCard = card;
        return;
    }
    secondCard = card;
    checkMatch();
}

/**
 * Applies the selected theme to game and end screens.
*/
function applyTheme() {
    let themeGameScreen = document.getElementById("gameScreen");
    let themeEndScreen = document.getElementById("endScreen");
    if (!themeGameScreen || !themeEndScreen) return;
    let themes = ["codeVibes-theme", "gaming-theme"];
    themeGameScreen.classList.remove(...themes);
    themeEndScreen.classList.remove(...themes);
    themeGameScreen.classList.add(`${gameState.theme}-theme`)
    themeEndScreen.classList.add(`${gameState.theme}-theme`)
}

/**
 * Flips a card visually.
*/
function flipCard(card: HTMLButtonElement) {
    card.classList.add("is-flipped");
}

/**
 * Checks whether two selected cards match.
*/
function checkMatch() {
    if (!firstCard || !secondCard) return;
    const isMatch: boolean =
        firstCard.dataset.value === secondCard.dataset.value;
    if (isMatch) {
        disableCards();
        endTurn(isMatch);
        checkGameEnd(cards);
    } else {
        unflipCards();
    }
}

/**
 * Marks two matching cards as disabled/matched.
*/
function disableCards() {
    if (!firstCard || !secondCard) return;
    const firstId = Number(firstCard.dataset.id);
    const secondId = Number(secondCard.dataset.id);
    const first = cards.find(card => card.id === firstId);
    const second = cards.find(card => card.id === secondId);
    if (first) first.isMatched = true;
    if (second) second.isMatched = true;
    firstCard?.classList.add("matched");
    secondCard?.classList.add("matched");
}

/**
 * Flips cards back if they do not match.
*/
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard?.classList.remove("is-flipped");
        secondCard?.classList.remove("is-flipped");
        endTurn(false)
    }, 800);
}

/**
 * Resets selected cards and unlocks the board.
*/
function resetBoard() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

/**
 * Ends the current turn and updates game state.
*/
function endTurn(isMatch: boolean) {
    if (isMatch === true) {
        if (matchState.currentPlayer === "blue") {
            matchState.blueScore++;
        } else {
            matchState.orangeScore++
        }
        displayScore();
    } else {
        matchState.currentPlayer = matchState.currentPlayer === "blue" ? "orange" : "blue";
    }
    displayCurrentPlayer();
    resetBoard();
}

/**
 * Updates the UI indicator for the current player.
*/
function displayCurrentPlayer() {
    let color = document.getElementById('icon');
    if (!color) return;
    if (matchState.currentPlayer === "blue") {
        color.classList.add("blue-label");
        color.classList.remove("orange-label");
    } else {
        color?.classList.add("orange-label");
        color?.classList.remove("blue-label");
    }
}

/**
 * Updates the score display for both players.
*/
function displayScore() {
    const blueEl = document.getElementById("blueScore");
    const orangeEl = document.getElementById("orangeScore");
    if (blueEl) {
        blueEl.textContent = matchState.blueScore.toString();
        blueEl.style.color = "#2BB1FF"
    }
    if (orangeEl) {
        orangeEl.textContent = matchState.orangeScore.toString();
        orangeEl.style.color = "#F58E39"
    }
}

/**
 * Resets match scores and updates UI.
*/
function resetMatchState() {
    matchState.blueScore = 0;
    matchState.orangeScore = 0;
    displayScore();
    displayCurrentPlayer();
}

/**
 * Initializes overlay event listeners and interactions.
*/
function initOverlay() {
    const overlay = document.getElementById('overlay');
    const popUp = document.getElementById('popUp');
    const selectionBtn = document.getElementById('selectionBtn');
    const closeBtn = document.getElementById('closeBtn');
    const exitBtn = document.getElementById('exitBtn');
    overlay?.addEventListener('click', (event) => {
        if (event.target === overlay) {
            closeOverlay(overlay, popUp);
        }
    });
    selectionBtn?.addEventListener('click', () => {
        overlay?.classList.toggle("open");
        setTimeout(() => {
            popUp?.classList.toggle("open");
        }, 0);
    });
    closeBtn?.addEventListener('click', () => closeOverlay(overlay, popUp));
    exitBtn?.addEventListener('click', renderSettingsPage);
}

/**
 * Closes the overlay with an animation delay.
*/
function closeOverlay(overlay: HTMLElement | null, popUp: HTMLElement | null) {
    if (overlay) {
        overlay.classList.add("closing");
        popUp?.classList.add("closing");
        setTimeout(() => {
            overlay.classList.remove("open", "closing");
            popUp?.classList.remove("open", "closing");
        }, 1000);
    }
}

/**
 * Creates a list of paired cards for the game.
*/
function createPairs(size: number): Card[] {
    const pairCount = size / 2;
    const baseCards: Card[] = [];
    for (let i = 0; i < pairCount; i++) {
        const cardA: Card = {
            id: i * 2,
            value: `card-${i}`,
            isFlipped: false,
            isMatched: false
        };

        const cardB: Card = {
            id: i * 2 + 1,
            value: `card-${i}`,
            isFlipped: false,
            isMatched: false
        };
        baseCards.push(cardA, cardB);
    }
    return baseCards;
}

/**
 * Shuffles an array of cards randomly.
*/
function shuffle(cards: Card[]): Card[] {
    return cards
        .map(c => ({ ...c }))
        .sort(() => Math.random() - 0.5);
}
