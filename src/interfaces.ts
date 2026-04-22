/**
 * Represents the configuration of a game session.
*/
export interface Game {
    theme: "codeVibes" | "gaming",
    playerColor?: "blue" | "orange",
    cardSize?: 16 | 24 | 36
}