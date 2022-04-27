import Piece from './piece';
import Position from './position';
import { Color, Row, Column } from './types';

export default class Queen extends Piece {
    constructor(color: Color, row: Row, column: Column) {
        super(color, row, column);
    }

    canMoveTo(position: Position): boolean {
        const bishopLikeMove = Math.abs(this.position.getRow() - position.getRow()) === 
        Math.abs(this.position.getColumn().charCodeAt(0)- position.getColumn().charCodeAt(0));

        const rookLikeMove = (+(this.position.getRow() - position.getRow() === 0)
        ^ +(this.position.getColumn().charCodeAt(0)- position.getColumn().charCodeAt(0) === 0)) === 1

        const diffPosition = this.position.getRow() != position.getRow() || this.position.getColumn() != position.getColumn();

        return (+bishopLikeMove ^ +rookLikeMove) === 1 && diffPosition;
    }
}