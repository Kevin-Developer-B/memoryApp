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

export function renderGamePage() {
    showGameScreen();
    renderTemplate();
    setupGame();
    initOverlay();
}

function showGameScreen() {
    const play = document.getElementById('settingScreen');
    const game = document.getElementById('gameScreen');

    if (play && game) {
        play.style.display = "none";
        game.style.display = "flex";
    }
}

function renderTemplate() {
    const gameScreenRef = document.getElementById('gameScreen');
    if (!gameScreenRef) return;

    gameScreenRef.innerHTML = gamePageTemplate();

    applyTheme();
    resetMatchState();
    displayScore();
    displayCurrentPlayer();
}

function setupGame() {
    matchState.currentPlayer = gameState.playerColor;

    const size = gameState.cardSize ?? 16;
    cards = shuffle(createPairs(size));

    renderBoard(cards, size);
}

function renderBoard(cards: Card[], size: number) {
    const fieldRef = document.getElementById("field");
    if (fieldRef) {

        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];

            const button = document.createElement("button");
            button.classList.add("card");
            button.dataset.id = card.id.toString();
            button.dataset.value = card.value;

            button.innerHTML = `
                    <div class="card__inner">
                        <div class="card__face card__face--back"></div>
                        <div class="card__face card__face--front">
                            <img src="../../../public/assets/img/Themes/${gameState.theme}/${card.value}.png" alt="${card.value}">
                        </div>
                    </div>
                `;

            fieldRef.appendChild(button);
        }
        fieldRef.classList.remove("grid-16", "grid-24", "grid-32");
        if (size === 16) fieldRef.classList.add("grid-16");
        if (size === 24) fieldRef.classList.add("grid-24");
        if (size === 36) fieldRef.classList.add("grid-32");

        fieldRef.addEventListener("click", (e) => {
            const target = e.target as HTMLElement;
            const card = target.closest(".card") as HTMLButtonElement | null;

            if (!card) return;
            if (lockBoard) return;
            if (card.classList.contains("is-flipped")) return;

            flipCard(card);

            if (!firstCard) {
                firstCard = card;
                return;
            }

            secondCard = card;

            checkMatch();
        });
    }
}

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

function flipCard(card: HTMLButtonElement) {
    card.classList.add("is-flipped");
}

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

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard?.classList.remove("is-flipped");
        secondCard?.classList.remove("is-flipped");
        endTurn(false)
    }, 800);

}

function resetBoard() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

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

function resetMatchState() {
    matchState.blueScore = 0;
    matchState.orangeScore = 0;
    displayScore();
    displayCurrentPlayer();
}

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

function shuffle(cards: Card[]): Card[] {
    return cards
        .map(c => ({ ...c }))
        .sort(() => Math.random() - 0.5);
}
