import Piece from '../../abstracts/Piece';
import Position from '../Position';
import GameStatus from '../../interfaces/GameStatus';

export default class TakesRestriction {
    take(attackPiece: Piece, targetPosition: Position, status: GameStatus) {
        if(!targetPosition.getState().free && attackPiece.getName() !== 'Pawn') {
            const attackedPieceIndex = this.getPieceIndexFromPosition(targetPosition, status.pieces);
            if(status.pieces[attackedPieceIndex].getColor() !== attackPiece.getColor()) {
                status.pieces[attackedPieceIndex].setTaked(true);
                
                if(status.pieces[attackedPieceIndex].getColor() === 'White') {
                    status.whiteKilledPieces.push(status.pieces[attackedPieceIndex]);
                } else {
                    status.blackKilledPieces.push(status.pieces[attackedPieceIndex]);
                }
            }
        }
    }

    getPieceIndexFromPosition(position: Position, pieces: Piece[]) {
        return pieces.findIndex(piece => {
            return piece.getPosition().getFile() === position.getFile()
            && piece.getPosition().getRank() === position.getRank();
        });
    }
}