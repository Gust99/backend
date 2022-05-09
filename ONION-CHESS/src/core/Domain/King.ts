import Piece from './Piece';
import Position from './Position';
import { Color, PieceID } from './types';

export default class King extends Piece {
    constructor(id: PieceID, position: Position, color: Color) {
        super(id, position, 999999, 'King', color);
    }

    canMoveTo(position: Position): boolean {
        const diffPosition = this.position.getRank() != position.getRank() || this.position.getFile() != position.getFile();

        const kingLikeMove = Math.abs(this.position.getRank() - position.getRank()) <= 1 
        && Math.abs(this.position.getFile().charCodeAt(0)) - Math.abs(position.getFile().charCodeAt(0)) <= 1

        return kingLikeMove && diffPosition;
    }
}