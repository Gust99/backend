import Piece from '../../abstracts/Piece';
import IAttackRestriction from '../../interfaces/IAttackRestriction';
import Position from '../Position';

export default class AttackRestriction implements IAttackRestriction {
    actionAvailable(piece: Piece, position: Position) {
        if(piece.getColor() === 'White' && (position.getState().attacked === 'BlackAttack'
        || position.getState().attacked === 'BothAttack')) {
            return false;
        }
        if(piece.getColor() === 'Black' && (position.getState().attacked === 'WhiteAttack'
        || position.getState().attacked === 'BothAttack')) {
            return false;
        }
        return true;
    }
}