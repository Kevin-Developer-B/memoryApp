import './style/style.scss'
import { startScreeTemplate } from './templates/startScreenTemplate';
import { settingScreenTemplate } from './templates/settingScreenTemplate';
import { gameScreenTemplate } from './templates/gameScreenTemplate';
import { endScreenTemplate } from './templates/endScreenTemplate';
import { Game } from './interfaces';

let gameState: Game = {
    theme: "codeVibes",
};

let matchState = {
    currentPlayer: gameState.playerColor,
    blueScore: 0,
    orangeScore: 0
}

let cards: Card[] = [];

type Card = {
    id: number;
    value: string;
    isFlipped: boolean;
    isMatched: boolean;
}

endScreen()

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
    const settingScreenRef = document.getElementById('settingScreen');
    const game = document.getElementById('gameScreen');

    if (start && settingScreenRef && game) {
        start.style.display = "none";
        settingScreenRef.style.display = "flex";
        game.style.display = "none";
    }


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
    matchState.currentPlayer = gameState.playerColor
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
        resetMatchState()
        displayScore();
        displayCurrentPlayer();
    }

    let size = gameState.cardSize ?? 16;
    cards = shuffle(createPairs(size));
    const fieldRef = document.getElementById("field");
    let firstCard: HTMLButtonElement | null = null;
    let secondCard: HTMLButtonElement | null = null;
    let lockBoard = false;

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
                            <img src="../../../public/assets/img/Themes/CodeVibe/${card.value}.png" alt="${card.value}">
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
            checkGameEnd();
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
        let color = document.getElementById('color');
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
        }

        if (orangeEl) {
            orangeEl.textContent = matchState.orangeScore.toString();
        }
    }

    function resetMatchState() {
        matchState.blueScore = 0;
        matchState.orangeScore = 0;
        displayScore();
        displayCurrentPlayer();
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
}

function checkGameEnd() {
    if (cards.length === 0) return;

    if (cards.every(card => card.isMatched)) {
        console.log(cards);
        endScreen();
    }

}

function endScreen() {
    const endScreenRef = document.getElementById('endScreen');
    const game = document.getElementById('gameScreen');
    if (endScreenRef && game) {
        endScreenRef.innerHTML = endScreenTemplate();
        game.style.display = "none";
        displayEndScore();
        displayWinner();
    };

    function displayEndScore() {
        const blue = document.getElementById("endBlueScore");
        const orange = document.getElementById("endOrangeScore");

        if (blue) {
            blue.textContent = matchState.blueScore.toString();
        }

        if (orange) {
            orange.textContent = matchState.orangeScore.toString();
        }
    }

    function displayWinner() {
        const winnerEl = document.getElementById("winnerScreen");
        const winnerPlayer = document.getElementById("winnerPlayer");
        const winnerImg = document.getElementById("winnerImg");
        if (!winnerEl) return;

        if (winnerImg && winnerPlayer && matchState.blueScore > matchState.orangeScore) {
            winnerPlayer.textContent = "BLUE PLAYER";
            winnerImg.classList.add("winner__blue");
        } else if (winnerImg && winnerPlayer && matchState.orangeScore > matchState.blueScore) {
            winnerPlayer.textContent = "ORANGE PLAYER";
            winnerImg.classList.add("winner__orange");
        } else {
            winnerPlayer!.textContent = "DRAW";
            winnerPlayer!.classList.remove("winner__orange");
        }
    }
}