import Piece from '../../abstracts/Piece';
import TrajectoryMapper from '../../abstracts/TrajectoryMapper';
import Position from '../Position';

export default class UpLeftTrajectoryMapper extends TrajectoryMapper {
    mapTrajectory(piece: Piece, target: Position, positions: Position[], pieces: Piece[]): Position[] {
        let i = 0;
        
        for(i = this.mappingStartPositionIndex + 1; i < this.mappingEndPositionIndex; i++) {
            if(
                !(this.distanceCalculator.getRankDistance(positions[i].getRank(),target.getRank()) > 0)
                &&
                !(this.distanceCalculator.getFileDistance(positions[i].getFile(),target.getFile()) < 0)
            ) {
                continue;
            }
            if(!positions[i].getState().free && piece.getName() !== 'Knight') {
                this.trajectory = [];
                return this.trajectory;
            }
            if(piece.canMoveTo(positions[i])) {
                this.trajectory.push(positions[i]);
            }
        }

        if(positions[i].getState().free) {
            this.trajectory.push(positions[i]);
            return this.trajectory;
        }

        if(this.getPieceFromPosition(positions[i], pieces)?.getColor() === piece.getColor()) {
            this.trajectory.push(positions[i]);
            return this.trajectory;
        } else {
            this.trajectory = [];
        }

        return this.trajectory;
    }
}