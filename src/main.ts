import './style/style.scss'
import { startScreeTemplate } from './templates/startScreenTemplate';
import { settingScreenTemplate } from './templates/settingScreenTemplate';
import { gameScreenTemplate } from './templates/gameScreenTemplate';
import { Game } from './interfaces';

let gameState: Game = {
    theme: "codeVibes",
};

let matchState = {
    currentPlayer: gameState.playerColor
}

type Card = {
    id: number;
    value: string;
    isFlipped: boolean;
    isMatched: boolean;
}

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
    }

    
    let color = document.getElementById('color');
    if (color && matchState.currentPlayer === "blue") {
        color.classList.add("blue-label")
    } else {
        color?.classList.add("orange-label")
    }



    let size = gameState.cardSize ?? 16;
    let cards: Card[] = shuffle(createPairs(size));
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

        const isMatch =
            firstCard.dataset.value === secondCard.dataset.value;

        if (isMatch) {
            disableCards();
        } else {
            unflipCards();
        }
    }

    function disableCards() {
        firstCard?.classList.add("matched");
        secondCard?.classList.add("matched");

        resetBoard();
    }

    function unflipCards() {
        lockBoard = true;

        setTimeout(() => {
            firstCard?.classList.remove("is-flipped");
            secondCard?.classList.remove("is-flipped");

            resetBoard();
        }, 800);
    }

    function resetBoard() {
        firstCard = null;
        secondCard = null;
        lockBoard = false;
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
