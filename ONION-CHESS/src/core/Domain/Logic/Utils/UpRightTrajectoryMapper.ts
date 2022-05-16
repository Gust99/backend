import Piece from '../../abstracts/Piece';
import Position from '../Position';
import TrajectoryMapper from '../../abstracts/TrajectoryMapper';

export default class UpRightTrajectoryMapper extends TrajectoryMapper {
    mapTrajectory(piece: Piece, target: Position, positions: Position[]): Position[] {
        for(let i = this.mappingStartPositionIndex + 1; i < this.mappingEndPositionIndex; i++) {
            if(
                !(this.distanceCalculator.getRankDistance(positions[i].getRank(),target.getRank()) > 0)
                ||
                !(this.distanceCalculator.getFileDistance(positions[i].getFile(),target.getFile()) > 0)
            ) {
                continue;
            }
            if(positions[i].getState() === 'Occupied' && piece.getName() !== 'Knight') {
                this.trajectory = [];
                break;
            }
            if(piece.canMoveTo(positions[i])) {
                this.trajectory.push(positions[i]);
            }
        }

        return this.trajectory;
    }
}