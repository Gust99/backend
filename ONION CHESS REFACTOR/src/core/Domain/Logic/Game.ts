import Position from './Position';
import GameStatus from '../interfaces/GameStatus';
import { PieceGameID } from './types';
import Populator from './Populator';

export default class Game {
    constructor(
        private status: GameStatus
    ) {}

    getStatus(): GameStatus {
        return this.status;
    }

    start(): GameStatus {
        Populator.populate(this.status);
        return this.status;
    }

    next(pieceID: PieceGameID, position: Position): boolean {

    }

    restart() {
        Populator.destroy(this.status);
        return this.start();
    }
}