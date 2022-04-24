import Piece from './Piece';
import Position from './Position';
import { Row, Column, Color } from './types';

export default class King extends Piece {
    constructor(color: Color, row: Row, column: Column) {
        super(color, row, column);
    }

    canMoveTo(position: Position): boolean {
        return (Math.abs(this.position.getRow() - position.getRow()) <= 1) 
        && (Math.abs(this.position.getColumn().charCodeAt(0)) - Math.abs(position.getColumn().charCodeAt(0)) <= 1);
    }
}