import Piece from './piece';
import Position from './position';
import { Color, Row, Column } from './types';

export default class Bishop extends Piece {
    constructor(color: Color, row: Row, column: Column) {
        super(color, row, column);
    }

    canMoveTo(position: Position): boolean {
        const bishopLikeMove = Math.abs(this.position.getRow() - position.getRow())
        === Math.abs(this.position.getColumn().charCodeAt(0) - position.getColumn().charCodeAt(0));

        const diffPosition = this.position.getRow() != position.getRow() || this.position.getColumn() != position.getColumn();

        return bishopLikeMove && diffPosition;
    }
}