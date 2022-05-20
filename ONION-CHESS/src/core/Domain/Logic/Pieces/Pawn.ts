import Piece from '../../abstracts/Piece';
import Position from '../Position';
import { PieceGameID } from '../types';

export default class Pawn extends Piece {
    constructor(id: PieceGameID, position: Position) {
        super(id, 'Pawn', 1, position);
    }

    canMoveTo(position: Position): boolean {
        const diffPosition = this.position.getRank() != position.getRank() || this.position.getFile() != position.getFile();

        if(this.getColor() === 'White') {
            if(this.position.getRank() === 2) {
                return (
                    (
                        position.getRank() - this.position.getRank() === 1
                        &&
                        position.getFile().charCodeAt(0) - this.position.getFile().charCodeAt(0) === 0
                    )
                    ||
                    (
                        position.getRank() - this.position.getRank() === 2
                        &&
                        position.getFile().charCodeAt(0) - this.position.getFile().charCodeAt(0) === 0
                    )
                    ||
                    this.takeMove(position)
                ) && diffPosition;
            } else {
                return (
                    (
                        position.getRank() - this.position.getRank() === 1
                        &&
                        position.getFile().charCodeAt(0) - this.position.getFile().charCodeAt(0) === 0
                    )
                    ||
                    this.takeMove(position)
                ) && diffPosition;
            }
        } else {
            if(this.position.getRank() === 7) {
                return (
                    (
                        position.getRank() - this.position.getRank() === -1
                        &&
                        position.getFile().charCodeAt(0) - this.position.getFile().charCodeAt(0) === 0
                    )
                    ||
                    (
                        position.getRank() - this.position.getRank() === -2
                        &&
                        position.getFile().charCodeAt(0) - this.position.getFile().charCodeAt(0) === 0
                    )
                    ||
                    this.takeMove(position)
                ) && diffPosition;
            } else {
                return (
                    (
                        position.getRank() - this.position.getRank() === -1
                        &&
                        position.getFile().charCodeAt(0) - this.position.getFile().charCodeAt(0) === 0
                    )
                    ||
                    this.takeMove(position)
                ) && diffPosition;
            }
        }
        //ADD LOGIC TO ENABLE TAKING MOVES
    }

    takeMove(position: Position) {
        if(position.getState().free) {
            console.log('No piece to take', position);
            return false;
        }
        if(this.getColor() === 'White') {
            return position.getRank() - this.position.getRank() === 1
            && Math.abs(position.getFile().charCodeAt(0) - position.getFile().charCodeAt(0)) === 1;
        } else {
            return position.getRank() - this.position.getRank() === -1
            && Math.abs(position.getFile().charCodeAt(0) - position.getFile().charCodeAt(0)) === 1;
        }
    }
}