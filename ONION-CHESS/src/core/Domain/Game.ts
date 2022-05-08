import Piece from './Piece';
import Position from './Position';
import Rook from './Rook';
import Knight from './Knight';
import Bishop from './Bishop';
import King from './King';
import Queen from './Queen';
import Pawn from './Pawn';
import GameStatus from './GameStatus';

export default class Game implements GameStatus {
    whiteTurn = true;
    pieces: Piece[] = [];
    whiteKilledPieces: Piece[] = [];
    blackKilledPieces: Piece[] = [];

    constructor() {}

    start(): GameStatus {
        //WHITE
        this.pieces.push(new Rook(new Position(1,'A'), 'White'));
        this.pieces.push(new Knight(new Position(1,'B'), 'White'));
        this.pieces.push(new Bishop(new Position(1,'C'), 'White'));
        this.pieces.push(new Queen(new Position(1,'D'), 'White'));
        this.pieces.push(new King(new Position(1,'E'), 'White'));
        this.pieces.push(new Bishop(new Position(1,'F'), 'White'));
        this.pieces.push(new Knight(new Position(1,'G'), 'White'));
        this.pieces.push(new Rook(new Position(1,'H'), 'White'));

        this.pieces.push(new Pawn(new Position(2,'A'), 'White'));
        this.pieces.push(new Pawn(new Position(2,'B'), 'White'));
        this.pieces.push(new Pawn(new Position(2,'C'), 'White'));
        this.pieces.push(new Pawn(new Position(2,'D'), 'White'));
        this.pieces.push(new Pawn(new Position(2,'E'), 'White'));
        this.pieces.push(new Pawn(new Position(2,'F'), 'White'));
        this.pieces.push(new Pawn(new Position(2,'G'), 'White'));
        this.pieces.push(new Pawn(new Position(2,'H'), 'White'));

        //BLACK
        this.pieces.push(new Rook(new Position(8,'A'), 'Black'));
        this.pieces.push(new Knight(new Position(8,'B'), 'Black'));
        this.pieces.push(new Bishop(new Position(8,'C'), 'Black'));
        this.pieces.push(new Queen(new Position(8,'D'), 'Black'));
        this.pieces.push(new King(new Position(8,'E'), 'Black'));
        this.pieces.push(new Bishop(new Position(8,'F'), 'Black'));
        this.pieces.push(new Knight(new Position(8,'G'), 'Black'));
        this.pieces.push(new Rook(new Position(8,'H'), 'Black'));

        this.pieces.push(new Pawn(new Position(7,'A'), 'Black'));
        this.pieces.push(new Pawn(new Position(7,'B'), 'Black'));
        this.pieces.push(new Pawn(new Position(7,'C'), 'Black'));
        this.pieces.push(new Pawn(new Position(7,'D'), 'Black'));
        this.pieces.push(new Pawn(new Position(7,'E'), 'Black'));
        this.pieces.push(new Pawn(new Position(7,'F'), 'Black'));
        this.pieces.push(new Pawn(new Position(7,'G'), 'Black'));
        this.pieces.push(new Pawn(new Position(7,'H'), 'Black'));

        return {
            pieces: this.pieces,
            whiteKilledPieces: this.whiteKilledPieces,
            blackKilledPieces: this.blackKilledPieces,
            whiteTurn: this.whiteTurn
        };
    }
    next() {

    }
    restart() {

    }
    end() {

    } 
}