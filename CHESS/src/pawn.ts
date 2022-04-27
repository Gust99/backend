import Piece from './piece';
import Position from './position';
import { Color, Row, Column } from './types';

export default class Pawn extends Piece {
    private startRow: Row;

    constructor(color: Color, row: Row, column: Column) {
        super(color, row, column);
        this.startRow = (color === 'White') ? 2 : 7;
    }

    canMoveTo(position: Position): boolean {
        const diffPosition = this.position.getRow() != position.getRow() || this.position.getColumn() != position.getColumn();

        if(this.getColor() === 'White') {
            if(this.position.getRow() === this.startRow) {
                return (position.getRow() - this.position.getRow() === 1
                || position.getRow() - this.position.getRow() === 2) && diffPosition;
            } else {
                return position.getRow() - this.position.getRow() === 1 && diffPosition;
            }
        } else {
            if(this.position.getRow() === this.startRow) {
                return (position.getRow() - this.position.getRow() === -1
                || position.getRow() - this.position.getRow() === -2) && diffPosition;
            } else {
                return position.getRow() - this.position.getRow() === -1 && diffPosition;
            }
        }
    }
}