import Piece from './Piece';
import Position from './Position';
import { Color, PieceID } from './types';

export default class Pawn extends Piece {
    constructor(id: PieceID, position: Position, color: Color) {
        super(id, position, 1, 'Pawn', color);
    }

    canMoveTo(position: Position): boolean {
        const diffPosition = this.position.getRank() != position.getRank() || this.position.getFile() != position.getFile();

        if(this.getColor() === 'White') {
            if(this.position.getRank() === 2) {
                return (position.getRank() - this.position.getRank() === 1
                || position.getRank() - this.position.getRank() === 2) && diffPosition;
            } else {
                return position.getRank() - this.position.getRank() === 1 && diffPosition;
            }
        } else {
            if(this.position.getRank() === 7) {
                return (position.getRank() - this.position.getRank() === -1
                || position.getRank() - this.position.getRank() === -2) && diffPosition;
            } else {
                return position.getRank() - this.position.getRank() === -1 && diffPosition;
            }
        }
    }
}