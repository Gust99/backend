import Piece from '../../abstracts/Piece';
import Position from '../Position';
import DistanceCalculator from './DistanceCalculator';
import UpRightTrajectoryMapper from './UpRightTrajectoryMapper';
import UpLeftTrajectoryMapper from './UpLeftTrajectoryMapper';
import DownLeftTrajectoryMapper from './DownLeftTrajectoryMapper';
import DownRightTrajectoryMapper from './DownRightTrajectoryMapper';
import RightTrajectoryMapper from './RightTrajectoryMapper';
import LeftTrajectoryMapper from './LeftTrajectoryMapper';
import UpTrajectoryMapper from './UpTrajectoryMapper';
import DownTrajectoryMapper from './DownTrajectoryMapper';

export default class Trajectory {
    getTrajectory(piece: Piece, target: Position, positions: Position[]): Position[] {
        let distanceCalculator = new DistanceCalculator();
        
        const pieceRank = piece.getPosition().getRank();
        const pieceFile = piece.getPosition().getFile();
        
        const rankDistance = distanceCalculator.getRankDistance(pieceRank,target.getRank());
        const fileDistance = distanceCalculator.getFileDistance(pieceFile,target.getFile());
        
        const piecePositionIndex = positions.findIndex(pos => {
            return pos.getRank() === pieceRank && pos.getFile() === pieceFile;
        });

        const targetPositionIndex = positions.findIndex(pos => {
            return pos.getRank() === target.getRank() && pos.getFile() === target.getFile();
        });

        if(rankDistance > 0 && fileDistance > 0) {//UP & RIGHT
            return new UpRightTrajectoryMapper(piecePositionIndex, targetPositionIndex)
                        .mapTrajectory(piece, target, positions);
        }
        if(rankDistance > 0 && fileDistance < 0) {//UP & LEFT
            return new UpLeftTrajectoryMapper(piecePositionIndex, targetPositionIndex)
                        .mapTrajectory(piece, target, positions);
        }
        if(rankDistance < 0 && fileDistance < 0) {//DOWN & LEFT
            return new DownLeftTrajectoryMapper(piecePositionIndex, targetPositionIndex)
                        .mapTrajectory(piece, target, positions);
        }
        if(rankDistance < 0 && fileDistance > 0) {//DOWN & RIGHT
            return new DownRightTrajectoryMapper(piecePositionIndex, targetPositionIndex)
                        .mapTrajectory(piece, target, positions);
        }
        if(rankDistance === 0 && fileDistance > 0) {//RIGHT
            return new RightTrajectoryMapper(piecePositionIndex, targetPositionIndex)
                        .mapTrajectory(piece, target, positions);
        }
        if(rankDistance === 0 && fileDistance < 0) {//LEFT
            return new LeftTrajectoryMapper(piecePositionIndex, targetPositionIndex)
                        .mapTrajectory(piece, target, positions);
        }
        if(rankDistance > 0 && fileDistance === 0) {//UP
            return new UpTrajectoryMapper(piecePositionIndex, targetPositionIndex)
                        .mapTrajectory(piece, target, positions);
        }
        if(rankDistance < 0 && fileDistance === 0) {//DOWN
            return new DownTrajectoryMapper(piecePositionIndex, targetPositionIndex)
                        .mapTrajectory(piece, target, positions);
        }

        return [];
    }
}