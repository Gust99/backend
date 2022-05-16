import Piece from '../../abstracts/Piece';
import IBlockingRestriction from '../../interfaces/IBlockingRestriction';
import ITrajectory from '../../interfaces/ITrajectory';
import Position from '../Position';
import Trajectory from '../Utils/Trajectory';
import DistanceCalculator from '../Utils/DistanceCalculator';

const oneBlockMoveMaxDistance = 2**(1/2);

export default class BlockingRestriction implements IBlockingRestriction {
    trajectoryMapper: ITrajectory = new Trajectory();

    actionAvailable(piece: Piece, position: Position, positions: Position[]): boolean {
        if(position.getState() === 'Occupied') {
            return false;
        }
        
        const trajectory = this.trajectoryMapper.getTrajectory(piece, position, positions);
        const distance = new DistanceCalculator().euclideanDistance(piece.getPosition(),position);
        
        if(trajectory.length > 0) {
            return true;
        }

        if(trajectory.length === 0 && distance <= oneBlockMoveMaxDistance && piece.getName() !== 'Knight') {
            return true;
        }

        if(trajectory.length === 0 && distance > oneBlockMoveMaxDistance && piece.getName() === 'Knight') {
            return true;
        }
        
        return false;
    }
}