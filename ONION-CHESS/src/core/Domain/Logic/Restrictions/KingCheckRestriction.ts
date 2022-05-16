import Piece from '../../abstracts/Piece';
import Position from '../Position';
import PieceMapper from '../Utils/PieceMapper';
import King from '../Pieces/King';
import AttackMapping from '../Utils/AttackMapping';

export default class KingCheckRestriction {
    private attackMapper: AttackMapping = new AttackMapping();
    private pieceMapper: PieceMapper = new PieceMapper();

    actionAvailable(piece: Piece, position: Position, pieces: Piece[], positions: Position[],targetPieceIndex: number, currentPositionIndex: number, targetPositionIndex: number) {
        if(piece.getName() !== 'King') {
            const kingIndex = this.pieceMapper.getPieceIndex(5, piece.getColor(), pieces);
            
            if(piece.getColor() === 'White') {
                if(pieces[kingIndex].getPosition().getState().attacked === 'BlackAttack' 
                || 
                pieces[kingIndex].getPosition().getState().attacked === 'BothAttack') {
                    return false;
                }
            } else {
                if(pieces[kingIndex].getPosition().getState().attacked === 'WhiteAttack' 
                || 
                pieces[kingIndex].getPosition().getState().attacked === 'BothAttack') {
                    return false;
                }
            }

            const positionsCopy = [...positions];
            const piecesCopy = [...pieces];

            positionsCopy[currentPositionIndex].setAvailabilityStatus(true);
            piecesCopy[targetPieceIndex].moveTo(position);
            positionsCopy[targetPositionIndex].setAvailabilityStatus(false);

            this.attackMapper.mapAttack(piecesCopy, positionsCopy);

            if(piece.getColor() === 'White') {
                if(pieces[kingIndex].getPosition().getState().attacked === 'BlackAttack' 
                || 
                pieces[kingIndex].getPosition().getState().attacked === 'BothAttack') {
                    return false;
                }
            } else {
                if(pieces[kingIndex].getPosition().getState().attacked === 'WhiteAttack' 
                || 
                pieces[kingIndex].getPosition().getState().attacked === 'BothAttack') {
                    return false;
                }
            }
        } else {
            if(piece.getColor() === 'White' && (position.getState().attacked === 'BlackAttack' || position.getState().attacked === 'BothAttack')) {
                return false;
            }
            if(piece.getColor() === 'Black' && (position.getState().attacked === 'WhiteAttack' || position.getState().attacked === 'BothAttack')) {
                return false;
            }
        }
        return true;
    }
}