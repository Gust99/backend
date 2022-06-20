import Rook from './Pieces/Rook';
import Knight from './Pieces/Knight';
import Bishop from './Pieces/Bishop';
import King from './Pieces/King';
import Queen from './Pieces/Queen';
import Pawn from './Pieces/Pawn';
import Position from './Position';
import Piece from '../abstracts/Piece';
import GameStatus from '../interfaces/GameStatus';
import { Rank, File, PositionState } from './types';

export default class Populator {
    static populate(status: GameStatus) {
        Populator.fillBoard(status.positions);
        Populator.fillPositions(status.positions, status.pieces);
    }

    static destroy(status: GameStatus) {
        status.pieces = [];
        status.positions = [];
        status.blackKilledPieces = [];
        status.whiteKilledPieces = [];
        status.whiteTurn = true;
    }

    static fillBoard(positions: Position[]) {
        for(let i = 1; i <= 8; i++) {
            ['A','B','C','D','E','F','G','H'].forEach(file => {
                positions.push(new Position(i as Rank, file as File));
            });
        }
    }
    
    static fillPositions(positions: Position[], pieces: Piece[]) {
        //WHITE
        pieces.push(new Rook({teamID: 1, color: 'White'}, positions[0]));//new Position(1,'A')
        positions[0].setAvailabilityStatus(false);
        
        pieces.push(new Knight({teamID: 2, color: 'White'}, positions[1]));//new Position(1,'B')
        positions[1].setAvailabilityStatus(false);

        pieces.push(new Bishop({teamID: 3, color: 'White'}, positions[2]));//new Position(1,'C')
        positions[2].setAvailabilityStatus(false);
        
        pieces.push(new Queen({teamID: 4, color: 'White'}, positions[3]));//new Position(1,'D')
        positions[3].setAvailabilityStatus(false);
        
        pieces.push(new King({teamID: 5, color: 'White'}, positions[4]));//new Position(1,'E')
        positions[4].setAvailabilityStatus(false);
        
        pieces.push(new Bishop({teamID: 6, color: 'White'}, positions[5]));//new Position(1,'F')
        positions[5].setAvailabilityStatus(false);
        
        pieces.push(new Knight({teamID: 7, color: 'White'}, positions[6]));//new Position(1,'G')
        positions[6].setAvailabilityStatus(false);
        
        pieces.push(new Rook({teamID: 8, color: 'White'}, positions[7]));//new Position(1,'H')
        positions[7].setAvailabilityStatus(false);

        pieces.push(new Pawn({teamID: 9, color: 'White'}, positions[8]));//new Position(2,'A')
        positions[8].setAvailabilityStatus(false);
        
        pieces.push(new Pawn({teamID: 10, color: 'White'}, positions[9]));//new Position(2,'B')
        positions[9].setAvailabilityStatus(false);
        
        pieces.push(new Pawn({teamID: 11, color: 'White'}, positions[10]));//new Position(2,'C')
        positions[10].setAvailabilityStatus(false);
        
        pieces.push(new Pawn({teamID: 12, color: 'White'}, positions[11]));//new Position(2,'D')
        positions[11].setAvailabilityStatus(false);
        
        pieces.push(new Pawn({teamID: 13, color: 'White'}, positions[12]));//new Position(2,'E')
        positions[12].setAvailabilityStatus(false);
        
        pieces.push(new Pawn({teamID: 14, color: 'White'}, positions[13]));//new Position(2,'F')
        positions[13].setAvailabilityStatus(false);
        
        pieces.push(new Pawn({teamID: 15, color: 'White'}, positions[14]));//new Position(2,'G')
        positions[14].setAvailabilityStatus(false);
        
        pieces.push(new Pawn({teamID: 16, color: 'White'}, positions[15]));//new Position(2,'H')
        positions[15].setAvailabilityStatus(false);

        // //BLACK
        pieces.push(new Rook({teamID: 1, color: 'Black'}, positions[56]));//new Position(8,'A')
        positions[56].setAvailabilityStatus(false);
        
        pieces.push(new Knight({teamID: 2, color: 'Black'}, positions[57]));//new Position(8,'B')
        positions[57].setAvailabilityStatus(false);
        
        pieces.push(new Bishop({teamID: 3, color: 'Black'}, positions[58]));//new Position(8,'C')
        positions[58].setAvailabilityStatus(false);
        
        pieces.push(new Queen({teamID: 4, color: 'Black'}, positions[59]));//new Position(8,'D')
        positions[59].setAvailabilityStatus(false);
        
        pieces.push(new King({teamID: 5, color: 'Black'}, positions[60]));//new Position(8,'E')
        positions[60].setAvailabilityStatus(false);
        
        pieces.push(new Bishop({teamID: 6, color: 'Black'}, positions[61]));//new Position(8,'F')
        positions[61].setAvailabilityStatus(false);
        
        pieces.push(new Knight({teamID: 7, color: 'Black'}, positions[62]));//new Position(8,'G')
        positions[62].setAvailabilityStatus(false);
        
        pieces.push(new Rook({teamID: 8, color: 'Black'}, positions[63]));//new Position(8,'H')
        positions[63].setAvailabilityStatus(false);

        pieces.push(new Pawn({teamID: 9, color: 'Black'}, positions[48]));//new Position(7,'A')
        positions[48].setAvailabilityStatus(false);
        
        pieces.push(new Pawn({teamID: 10, color: 'Black'}, positions[49]));//new Position(7,'B')
        positions[49].setAvailabilityStatus(false);
        
        pieces.push(new Pawn({teamID: 11, color: 'Black'}, positions[50]));//new Position(7,'C')
        positions[50].setAvailabilityStatus(false);
        
        pieces.push(new Pawn({teamID: 12, color: 'Black'}, positions[51]));//new Position(7,'D')
        positions[51].setAvailabilityStatus(false);
        
        pieces.push(new Pawn({teamID: 13, color: 'Black'}, positions[52]));//new Position(7,'E')
        positions[52].setAvailabilityStatus(false);
        
        pieces.push(new Pawn({teamID: 14, color: 'Black'}, positions[53]));//new Position(7,'F')
        positions[53].setAvailabilityStatus(false);
        
        pieces.push(new Pawn({teamID: 15, color: 'Black'}, positions[54]));//new Position(7,'G')
        positions[54].setAvailabilityStatus(false);
        
        pieces.push(new Pawn({teamID: 16, color: 'Black'}, positions[55]));//new Position(7,'H')
        positions[55].setAvailabilityStatus(false);
    }
}