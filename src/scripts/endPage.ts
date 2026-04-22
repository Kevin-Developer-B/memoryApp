import { endPageTemplate } from "../templates/endPageTemplate";
import { renderStartPage } from "./startPage";
import { Card, matchState } from './states';

/**
 * Checks whether all cards are matched and ends the game if so.
 * @param cards - Array of card objects to evaluate.
*/
export function checkGameEnd(cards: Card[]) {
    if (cards.length === 0) return;
    const isFinished = cards.every(card => card.isMatched);
    if (isFinished) {
        renderEndPage();
    }
}

/**
 * Renders the end page and initializes its UI and events.
*/
export function renderEndPage() {
    showEndScreen();
    renderTemplate();
    setupEvents();
}

/**
 * Displays the end screen and hides the game screen.
*/
function showEndScreen() {
    const end = document.getElementById('endScreen');
    const game = document.getElementById('gameScreen');
    if (end && game) {
        end.style.display = "flex";
        game.style.display = "none";
    }
}

/**
 * Renders the end screen template and updates score and winner.
*/
function renderTemplate() {
    const endScreenRef = document.getElementById('endScreen');
    if (!endScreenRef) return;
    endScreenRef.innerHTML = endPageTemplate();
    displayEndScore();
    displayWinner();
}

/**
 * Attaches event listeners for end screen interactions.
*/
function setupEvents() {
    const backBtn = document.getElementById('backToStartBtn');
    backBtn?.addEventListener('click', renderStartPage);
}

/**
 * Displays the final scores for both players.
*/
function displayEndScore() {
    const blue = document.getElementById("endBlueScore");
    const orange = document.getElementById("endOrangeScore");
    if (blue) {
        blue.textContent = matchState.blueScore.toString();
        blue.style.color = "#2BB1FF";
    }
    if (orange) {
        orange.textContent = matchState.orangeScore.toString();
        orange.style.color = "#F58E39";
    }
}

/**
 * Determines and displays the winner or a draw.
*/
function displayWinner() {
    const winnerPlayer = document.getElementById("winnerPlayer");
    const winnerImg = document.getElementById("winnerImg");
    if (!winnerPlayer || !winnerImg) return;

    if (matchState.blueScore > matchState.orangeScore) {
        winnerPlayer.textContent = "BLUE PLAYER";
        winnerPlayer.style.color = "blue";
        winnerImg.classList.add("winner__blue");

    } else if (matchState.orangeScore > matchState.blueScore) {
        winnerPlayer.textContent = "ORANGE PLAYER";
        winnerPlayer.style.color = "orange";
        winnerImg.classList.add("winner__orange");

    } else {
        winnerPlayer.textContent = "DRAW";
    }
}