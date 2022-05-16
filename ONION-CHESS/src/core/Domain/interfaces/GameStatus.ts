import Piece from "../abstracts/Piece";
import Position from "../Logic/Position";

export default interface GameStatus {
    pieces: Piece[];
    positions: Position[];
    whiteKilledPieces: Piece[];
    blackKilledPieces: Piece[];
    whiteTurn: boolean;
}