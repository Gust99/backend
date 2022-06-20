import Piece from '../../abstracts/Piece';
import IBlockingRestriction from '../../interfaces/IBlockingRestriction';
import ITrajectory from '../../interfaces/ITrajectory';
import Position from '../Position';
import Trajectory from '../Utils/Trajectory';

export default class BlockingRestriction implements IBlockingRestriction {
    trajectoryMapper: ITrajectory = new Trajectory();
    trajectory: Position[] = [];

    actionAvailable(piece: Piece, position: Position, positions: Position[], pieces: Piece[]): boolean {
        this.trajectory = this.trajectoryMapper.getTrajectory(piece, position, positions, pieces);
        
        if(this.trajectory.length > 0) {
            return true;
        }
        
        return false;
    }
}