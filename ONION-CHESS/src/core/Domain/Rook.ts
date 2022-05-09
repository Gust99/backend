import Piece from './Piece';
import Position from './Position';
import { Color, PieceID } from './types';

export default class Rook extends Piece {
    constructor(id: PieceID, position:Position, color: Color) {
        super(id, position, 5, 'Rook', color);
    }

    canMoveTo(position: Position): boolean {
        const diffPosition = this.position.getRank() != position.getRank() || this.position.getFile() != position.getFile();

        const rookLikeMove = this.position.getRank() - position.getRank() === 0
        || this.position.getFile().charCodeAt(0) - position.getFile().charCodeAt(0) === 0;

        return rookLikeMove && diffPosition;
    }
}