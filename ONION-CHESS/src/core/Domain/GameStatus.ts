import Piece from "./Piece";

export default interface GameStatus {
    pieces: Piece[];
    whiteKilledPieces: Piece[];
    blackKilledPieces: Piece[];
    whiteTurn: boolean;
}