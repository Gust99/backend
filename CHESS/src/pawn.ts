import Piece from './Piece';
import Position from './position';
import { Color, Row, Column } from './types';

export default class Pawn extends Piece {
    private startRow: Row;

    constructor(color: Color, row: Row, column: Column) {
        super(color, row, column);
        this.startRow = (color === 'White') ? 2 : 7;
    }

    canMoveTo(position: Position): boolean {
        if(this.getColor() === 'White') {
            if(this.position.getRow() === this.startRow) {
                return (position.getRow() - this.position.getRow() === 1)
                || (position.getRow() - this.position.getRow() === 2);
            } else {
                return (position.getRow() - this.position.getRow() === 1);
            }
        } else {
            if(this.position.getRow() === this.startRow) {
                return (position.getRow() - this.position.getRow() === -1)
                || (position.getRow() - this.position.getRow() === -2);
            } else {
                return (position.getRow() - this.position.getRow() === -1);
            }
        }
    }
}