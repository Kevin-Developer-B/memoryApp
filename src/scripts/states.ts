import { Game } from '../interfaces';

export let gameState: Game = {
    theme: "codeVibes",
};

export let matchState = {
    currentPlayer: gameState.playerColor,
    blueScore: 0,
    orangeScore: 0
}

export type Card = {
    id: number;
    value: string;
    isFlipped: boolean;
    isMatched: boolean;
}