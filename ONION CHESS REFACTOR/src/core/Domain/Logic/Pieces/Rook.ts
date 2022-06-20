import Piece from '../../abstracts/Piece';
import Position from '../Position';
import { PieceGameID } from '../types';

export default class Rook extends Piece {
    constructor(id: PieceGameID, position:Position) {
        super(id, 'Rook', 5, position);
    }

    canMoveTo(position: Position): boolean {
        const diffPosition = this.position.getRank() != position.getRank() || this.position.getFile() != position.getFile();

        const rookLikeMove = this.position.getRank() - position.getRank() === 0
        || this.position.getFile().charCodeAt(0) - position.getFile().charCodeAt(0) === 0;

        return rookLikeMove && diffPosition;
    }
}