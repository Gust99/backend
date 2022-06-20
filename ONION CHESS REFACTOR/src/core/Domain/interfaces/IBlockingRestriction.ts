import Piece from '../abstracts/Piece';
import Position from '../Logic/Position';
import ITrajectoryMapper from './ITrajectory';

export default interface IBlockingRestriction {
    trajectoryMapper: ITrajectoryMapper;
    trajectory: Position[];
    actionAvailable(piece: Piece, position: Position, positions: Position[], pieces: Piece[]): boolean;
}