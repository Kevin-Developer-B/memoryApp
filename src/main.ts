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
    }

    const themes = document.querySelectorAll(".game-theme");
    if (themes.length > 0) {
        themes[0].classList.add("active");
    }
    themes.forEach(btn => {
        btn.addEventListener('click', () => {
            themes.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    const player = document.querySelectorAll(".player");
    player.forEach(btn => {
        btn.addEventListener('click', () => {
            player.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    const cardSize = document.querySelectorAll(".cardSize");
    cardSize.forEach(btn => {
        btn.addEventListener('click', () => {
            cardSize.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    let currentGame: Game = { theme: "code-vibe" };
    updateGame(currentGame);
    document.querySelectorAll(".game-theme").forEach((button) => {
        button.addEventListener("click", (event) => {
            const target = event.currentTarget as HTMLButtonElement;
            let theme = "";
            if (target.id === "theme1") {
                theme = "code-vibe";
            } else if (target.id === "theme2") {
                theme = "gaming";
            }
            currentGame = { theme };
            updateGame(currentGame);
        });
    });

    document.querySelectorAll(".player").forEach((button) => {
        button.addEventListener("click", (event) => {
            const target = event.currentTarget as HTMLButtonElement;
            let playerColor = "";
            if (target.id === "playerBlue") {
                playerColor = "Blue";
            } else if (target.id === "playerOrange") {
                playerColor = "Orange";
            }
            updateGame({ playerColor });
        });
    });

    document.querySelectorAll(".cardSize").forEach((button) => {
        button.addEventListener("click", (event) => {
            const target = event.currentTarget as HTMLButtonElement;
            let cardSize = 0;
            if (target.id === "size16") {
                cardSize = 16;
            } else if (target.id === "size24") {
                cardSize = 24;
            } else if (target.id === "size36") {
                cardSize = 36;
            }
            updateGame({ cardSize });
        });
    });

    const Game = document.getElementById("startGame");
    if (Game) {
        Game.addEventListener("click", (event) => {
            const target = event.currentTarget as HTMLButtonElement;
            startGame();
        })
    }

}
let currentGame: Game = { theme: "code-vibe" };
function updateGame(update: Partial<Game>) {
    currentGame = { ...currentGame, ...update };
    console.log("Game State:", currentGame);
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