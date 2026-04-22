import { Game } from '../interfaces';

/** 
 * Global game configuration state 
*/
export let gameState: Game = {
    theme: "codeVibes",
};

/** 
 * Tracks the current match state including scores and active player 
*/
export let matchState = {
    currentPlayer: gameState.playerColor,
    blueScore: 0,
    orangeScore: 0
}

/**
 * Represents a single card in the game
 * @property id - Unique identifier for the card
 * @property value - The content/value displayed on the card
 * @property isFlipped - Indicates whether the card is currently flipped
 * @property isMatched - Indicates whether the card has been matched
*/
export type Card = {
    id: number;
    value: string;
    isFlipped: boolean;
    isMatched: boolean;
}