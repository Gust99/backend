import Piece from '../../abstracts/Piece';
import Position from '../Position';
import PieceMapper from '../Utils/PieceMapper';
import King from '../Pieces/King';
import AttackMapping from '../Utils/AttackMapping';

export default class KingCheckRestriction {
    private attackingRestriction: AttackMapping = new AttackMapping();
    private pieceMapper: PieceMapper = new PieceMapper();

    actionAvailable(piece: Piece, position: Position, pieces: Piece[], positions: Position[],targetPieceIndex: number, currentPositionIndex: number, targetPositionIndex: number) {
        if(piece.getName() !== 'King') {
            const kingIndex = this.pieceMapper.getPieceIndex(5, piece.getColor(), pieces);
            
            const positionsCopy = [...positions];
            const piecesCopy = [...pieces];

            positionsCopy[currentPositionIndex].setState('Free');
            piecesCopy[targetPieceIndex].moveTo(position);
            positionsCopy[targetPositionIndex].setState('Occupied');

            this.attackingRestriction.mapAttack(piecesCopy, positionsCopy);

            if(piece.getColor() === 'White') {
                if((pieces[kingIndex] as King).getPosition().getState() === 'BlackAttack' 
                || 
                (pieces[kingIndex] as King).getPosition().getState() === 'BothAttack') {
                    return false;
                }
            } else {
                if((pieces[kingIndex] as King).getPosition().getState() === 'WhiteAttack' 
                || 
                (pieces[kingIndex] as King).getPosition().getState() === 'BothAttack') {
                    return false;
                }
            }
        } else {
            if(piece.getColor() === 'White' && (position.getState() === 'BlackAttack' || position.getState() === 'BothAttack')) {
                return false;
            }
            if(piece.getColor() === 'Black' && (position.getState() === 'WhiteAttack' || position.getState() === 'BothAttack')) {
                return false;
            }
        }
        return true;
    }
}