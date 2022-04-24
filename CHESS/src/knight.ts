import Piece from './Piece';
import Position from './position';
import { Color, Row, Column } from './types';

export default class Knight extends Piece {
    constructor(color: Color, row: Row, column: Column) {
        super(color, row, column);
    }

    canMoveTo(position: Position): boolean {
        return (+(Math.abs(this.position.getRow() - position.getRow()) === 2
        && Math.abs(this.position.getColumn().charCodeAt(0) - position.getColumn().charCodeAt(0)) === 1)
        ^ +(Math.abs(this.position.getRow() - position.getRow()) === 1
        && Math.abs(this.position.getColumn().charCodeAt(0) - position.getColumn().charCodeAt(0)) === 2)) === 1;
    }
}