import Piece from '../../abstracts/Piece';
import Position from '../Position';
import { PieceGameID } from '../types';

export default class Bishop extends Piece {
    constructor(id: PieceGameID, position: Position) {
        super(id, 'Bishop', 3, position);
    }

    canMoveTo(position: Position): boolean {
        const bishopLikeMove = Math.abs(this.position.getRank() - position.getRank())
        === Math.abs(this.position.getFile().charCodeAt(0) - position.getFile().charCodeAt(0));

        const diffPosition = this.position.getRank() != position.getRank() || this.position.getFile() != position.getFile();

        return bishopLikeMove && diffPosition;
    }
}