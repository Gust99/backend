import Piece from './Piece';
import { Color, Row, Column } from './types';
import Position from './Position';

export default class Rook extends Piece {
    constructor(color: Color, row: Row, column: Column) {
        super(color, row, column);
    }

    canMoveTo(position: Position): boolean {
        return 1 / Math.abs(this.position.getRow() - position.getRow()) === Infinity
        || 1 / Math.abs(this.position.getColumn().charCodeAt(0) - position.getColumn().charCodeAt(0)) === Infinity;
    }
}