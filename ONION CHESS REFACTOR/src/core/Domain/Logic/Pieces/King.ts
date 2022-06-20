import Piece from '../../abstracts/Piece';
import Position from '../Position';
import { KingState, PieceGameID } from '../types';

export default class King extends Piece {
    private state: KingState = 'Free';

    constructor(id: PieceGameID, position: Position) {
        super(id, 'King', 999999, position);
    }
    
    getState(): KingState {
        return this.state;
    }

    canMoveTo(position: Position): boolean {
        const diffPosition = this.position.getRank() != position.getRank() || this.position.getFile() != position.getFile();

        const kingLikeMove = Math.abs(this.position.getRank() - position.getRank()) <= 1 
        && Math.abs(this.position.getFile().charCodeAt(0)) - Math.abs(position.getFile().charCodeAt(0)) <= 1

        return kingLikeMove && diffPosition;
    }
}