import Piece from './Piece';
import Position from './Position';
import { Color, Row, Column } from './types';

export default class Queen extends Piece {
    constructor(color: Color, row: Row, column: Column) {
        super(color, row, column);
    }

    canMoveTo(position: Position): boolean {
        return (+(1 / Math.abs(this.position.getRow() - position.getRow()) === Infinity
        || 1 / Math.abs(this.position.getColumn().charCodeAt(0) - position.getColumn().charCodeAt(0)) === Infinity) 
        ^ +((Math.abs(this.position.getRow() - position.getRow()))
        === (Math.abs(this.position.getColumn().charCodeAt(0) - position.getColumn().charCodeAt(0))))) === 1;
    }
}