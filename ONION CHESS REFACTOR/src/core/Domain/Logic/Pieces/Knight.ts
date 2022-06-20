import Piece from '../../abstracts/Piece';
import Position from '../Position';
import { PieceGameID } from '../types';

export default class Knight extends Piece {
    constructor(id: PieceGameID, position: Position) {
        super(id, 'Knight', 3, position);
    }

    canMoveTo(position: Position): boolean {
        const knightLikeMove = (+(Math.abs(this.position.getRank() - position.getRank()) === 2
        && Math.abs(this.position.getFile().charCodeAt(0) - position.getFile().charCodeAt(0)) === 1)
        ^ +(Math.abs(this.position.getRank() - position.getRank()) === 1
        && Math.abs(this.position.getFile().charCodeAt(0) - position.getFile().charCodeAt(0)) === 2)) === 1;

        const diffPosition = this.position.getRank() != position.getRank() || this.position.getFile() != position.getFile();

        return knightLikeMove && diffPosition;
    }
}