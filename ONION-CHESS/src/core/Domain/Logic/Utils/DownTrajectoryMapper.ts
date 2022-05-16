import Piece from '../../abstracts/Piece';
import TrajectoryMapper from '../../abstracts/TrajectoryMapper';
import Position from '../Position';

export default class DownTrajectoryMapper extends TrajectoryMapper {
    mapTrajectory(piece: Piece, target: Position, positions: Position[], pieces: Piece[]): Position[] {
        let i = 0;

        for(i = this.mappingStartPositionIndex - 1; i > this.mappingEndPositionIndex; i--) {
            if(
                (this.distanceCalculator.getRankDistance(piece.getPosition().getRank(), positions[i].getRank()) < 0)
                &&
                (this.distanceCalculator.getFileDistance(piece.getPosition().getFile(), positions[i].getFile()) === 0)
                &&
                piece.canMoveTo(positions[i])
            ) {
                if(!positions[i].getState().free && piece.getName() !== 'Knight') {
                    this.trajectory = [];
                    return this.trajectory;
                }
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

        return this.trajectory
    }

}