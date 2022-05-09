import Position from './Position';
import { Color, PieceID } from './types';

export default abstract class Piece {
    constructor(
        protected id: PieceID,
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

    getName(): string {
        return this.name;
    }

    getID(): PieceID {
        return this.id;
    }

    abstract canMoveTo(position: Position): boolean
}