import Position from '../Logic/Position';
import { Color, PieceGameID } from '../Logic/types';

export default abstract class Piece {
    constructor(
        protected id: PieceGameID,
        protected name: string,
        protected value: number,
        protected position: Position
    ) {}

    moveTo(position: Position) {
        this.position = position;
    }

    getColor(): Color {
        return this.id.color;
    }

    getName(): string {
        return this.name;
    }

    getID(): PieceGameID {
        return this.id;
    }

    getPosition(): Position {
        return this.position;
    }

    abstract canMoveTo(position: Position): boolean
}