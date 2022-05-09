import Piece from './Piece';
import Position from './Position';
import Rook from './Rook';
import Knight from './Knight';
import Bishop from './Bishop';
import King from './King';
import Queen from './Queen';
import Pawn from './Pawn';
import GameStatus from './GameStatus';
import { Color, PieceID } from './types';

export default class Game implements GameStatus {
    whiteTurn = true;
    pieces: Piece[] = [];
    whiteKilledPieces: Piece[] = [];
    blackKilledPieces: Piece[] = [];

    constructor() {}

    start(): GameStatus {
        //WHITE
        this.pieces.push(new Rook(1, new Position(1,'A'), 'White'));
        this.pieces.push(new Knight(2, new Position(1,'B'), 'White'));
        this.pieces.push(new Bishop(3, new Position(1,'C'), 'White'));
        this.pieces.push(new Queen(4, new Position(1,'D'), 'White'));
        this.pieces.push(new King(5, new Position(1,'E'), 'White'));
        this.pieces.push(new Bishop(6, new Position(1,'F'), 'White'));
        this.pieces.push(new Knight(7, new Position(1,'G'), 'White'));
        this.pieces.push(new Rook(8, new Position(1,'H'), 'White'));

        this.pieces.push(new Pawn(9, new Position(2,'A'), 'White'));
        this.pieces.push(new Pawn(10, new Position(2,'B'), 'White'));
        this.pieces.push(new Pawn(11, new Position(2,'C'), 'White'));
        this.pieces.push(new Pawn(12, new Position(2,'D'), 'White'));
        this.pieces.push(new Pawn(13, new Position(2,'E'), 'White'));
        this.pieces.push(new Pawn(14, new Position(2,'F'), 'White'));
        this.pieces.push(new Pawn(15, new Position(2,'G'), 'White'));
        this.pieces.push(new Pawn(16, new Position(2,'H'), 'White'));

        //BLACK
        this.pieces.push(new Rook(1, new Position(8,'A'), 'Black'));
        this.pieces.push(new Knight(2, new Position(8,'B'), 'Black'));
        this.pieces.push(new Bishop(3, new Position(8,'C'), 'Black'));
        this.pieces.push(new Queen(4, new Position(8,'D'), 'Black'));
        this.pieces.push(new King(5, new Position(8,'E'), 'Black'));
        this.pieces.push(new Bishop(6, new Position(8,'F'), 'Black'));
        this.pieces.push(new Knight(7, new Position(8,'G'), 'Black'));
        this.pieces.push(new Rook(8, new Position(8,'H'), 'Black'));

        this.pieces.push(new Pawn(9, new Position(7,'A'), 'Black'));
        this.pieces.push(new Pawn(10, new Position(7,'B'), 'Black'));
        this.pieces.push(new Pawn(11, new Position(7,'C'), 'Black'));
        this.pieces.push(new Pawn(12, new Position(7,'D'), 'Black'));
        this.pieces.push(new Pawn(13, new Position(7,'E'), 'Black'));
        this.pieces.push(new Pawn(14, new Position(7,'F'), 'Black'));
        this.pieces.push(new Pawn(15, new Position(7,'G'), 'Black'));
        this.pieces.push(new Pawn(16, new Position(7,'H'), 'Black'));

        return {
            pieces: this.pieces,
            whiteKilledPieces: this.whiteKilledPieces,
            blackKilledPieces: this.blackKilledPieces,
            whiteTurn: this.whiteTurn
        };
    }
    next(pieceID: PieceID, piece: string, color: Color, position: Position): boolean {
        let targetPiece: Piece;
        let success = false;
        
        if(this.whiteTurn && color === 'White') {
            console.log('White move');
            targetPiece = this.pieces.find(pi => (piece === pi.getName() && pi.getColor() === 'White' && pi.getID() === pieceID)) ?? this.pieces[0];
            console.log(this.pieces[0]);
        } else if(!this.whiteTurn && color === 'Black') {
            targetPiece = this.pieces.find(pi => (piece === pi.getName() && pi.getColor() === 'Black' && pi.getID() === pieceID)) ?? this.pieces[0];
        } else {
            console.log('Error');
            return success;
        }
        
        if(targetPiece?.canMoveTo(position)) {
            targetPiece.moveTo(position);
            success = true;
            this.whiteTurn = !this.whiteTurn;
        }

        return success;
    }
    restart() {
        this.whiteTurn = true;
        this.pieces = [];
        this.blackKilledPieces = [];
        this.whiteKilledPieces = [];
        return this.start();
    }
    end() {

    } 
}