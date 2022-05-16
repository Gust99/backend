import Piece from '../../abstracts/Piece';
import Position from '../Position';
import { PieceGameID } from '../types';

export default class Pawn extends Piece {
    constructor(id: PieceGameID, position: Position) {
        super(id, 'Pawn', 1, position);
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