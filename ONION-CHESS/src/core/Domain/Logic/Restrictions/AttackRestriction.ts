import Piece from '../../abstracts/Piece';
import IAttackRestriction from '../../interfaces/IAttackRestriction';
import Position from '../Position';

export default class AttackRestriction implements IAttackRestriction {
    actionAvailable(piece: Piece, position: Position) {
        if(piece.getColor() === 'White' && position.getState() === 'BlackAttack') {
            return false;
        }
        if(piece.getColor() === 'Black' && position.getState() === 'WhiteAttack') {
            return false;
        }
        return true;
    }
}