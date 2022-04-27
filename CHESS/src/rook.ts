import Piece from './piece';
import { Color, Row, Column } from './types';
import Position from './position';

export default class Rook extends Piece {
    constructor(color: Color, row: Row, column: Column) {
        super(color, row, column);
    }

    canMoveTo(position: Position): boolean {
        const diffPosition = this.position.getRow() != position.getRow() || this.position.getColumn() != position.getColumn();

        const rookLikeMove = this.position.getRow() - position.getRow() === 0
        || this.position.getColumn().charCodeAt(0) - position.getColumn().charCodeAt(0) === 0;

        return rookLikeMove && diffPosition;
    }
}