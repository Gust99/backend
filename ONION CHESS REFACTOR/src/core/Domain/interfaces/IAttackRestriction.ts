import Piece from '../abstracts/Piece';
import Position from '../Logic/Position';
export default interface IAttackRestriction {
    actionAvailable(piece: Piece, position: Position): boolean;
}