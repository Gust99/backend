import Position from './Position';
import { Color } from './types';

export default abstract class Piece {
    constructor(
        protected position: Position,
        protected value: number,
        protected name: string,
        protected readonly color: Color
    ) {}

    moveTo(position: Position) {
        this.position = position;
    }

    getColor(): Color {
        return this.color;
    }

    abstract canMoveTo(position: Position): boolean
}