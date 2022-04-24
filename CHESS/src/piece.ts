import Position from './position';
import { Row, Column, Color } from './types';


export default abstract class Piece {

    protected position: Position;

    constructor(
        private readonly color: Color,
        row: Row,
        column: Column
    ) {
        this.position = new Position(row, column);
    }

    moveTo(position: Position) {
        this.position = position;
    }

    getColor(): Color {
        return this.color;
    }

    abstract canMoveTo(position: Position): boolean
}