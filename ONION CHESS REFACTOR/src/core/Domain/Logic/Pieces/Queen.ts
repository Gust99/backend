import Piece from '../../abstracts/Piece';
import Position from '../Position';
import { PieceGameID } from '../types';

export default class Queen extends Piece {
    constructor(id: PieceGameID, position: Position) {
        super(id, 'Queen', 9, position);
    }

    canMoveTo(position: Position): boolean {
        const bishopLikeMove = Math.abs(this.position.getRank() - position.getRank()) === 
        Math.abs(this.position.getFile().charCodeAt(0)- position.getFile().charCodeAt(0));

        const rookLikeMove = (+(this.position.getRank() - position.getRank() === 0)
        ^ +(this.position.getFile().charCodeAt(0)- position.getFile().charCodeAt(0) === 0)) === 1

        const diffPosition = this.position.getRank() != position.getRank() || this.position.getFile() != position.getFile();

        return (+bishopLikeMove ^ +rookLikeMove) === 1 && diffPosition;
    }
}