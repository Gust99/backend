import Piece from '../abstracts/Piece';
import Position from '../Logic/Position';

export default interface ITrajectory {
    getTrajectory(piece: Piece, targe: Position, positions: Position[]): Position[];
}