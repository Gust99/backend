import Piece from './Piece';
import Position from './Position';
import { Color } from './types';

export default class Bishop extends Piece {
    constructor(position: Position, color: Color) {
        super(position, 3, 'Bishop', color);
    }

    canMoveTo(position: Position): boolean {
        const bishopLikeMove = Math.abs(this.position.getRank() - position.getRank())
        === Math.abs(this.position.getFile().charCodeAt(0) - position.getFile().charCodeAt(0));

        const diffPosition = this.position.getRank() != position.getRank() || this.position.getFile() != position.getFile();

        return bishopLikeMove && diffPosition;
    }
}