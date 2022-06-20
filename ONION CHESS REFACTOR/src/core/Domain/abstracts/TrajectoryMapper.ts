import Position from '../Logic/Position';
import Piece from './Piece';
import IDistanceCalculator from '../interfaces/IDistanceCalculator';
import DistanceCalculator from '../Logic/Utils/DistanceCalculator';

export default abstract class TrajectoryMapper {
    protected trajectory: Position[];
    protected distanceCalculator: IDistanceCalculator = new DistanceCalculator();

    constructor(
        protected mappingStartPositionIndex: number,
        protected mappingEndPositionIndex: number
    ) {
        this.trajectory = [];
    }

    getPieceFromPosition(position: Position, pieces: Piece[]) {
        return pieces.find(piece => {
            return piece.getPosition().getRank() === position.getRank()
            && piece.getPosition().getFile() === position.getFile()
        });
    }

    abstract mapTrajectory(piece: Piece, target: Position, positions: Position[], pieces: Piece[]): Position[];
}