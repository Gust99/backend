import { File, Rank } from "../types";
import IDistanceCalculator from '../../interfaces/IDistanceCalculator';
import Position from "../Position";

export default class DistanceCalculator implements IDistanceCalculator {
    getRankDistance(pieceRank: Rank,positionRank: Rank) {
        return positionRank - pieceRank;
    }
    
    getFileDistance(pieceFile: File, positionFile: File): number {
        return positionFile.charCodeAt(0) - pieceFile.charCodeAt(0);
    }

    euclideanDistance(piecePosition: Position, targetPosition: Position): number {
        const distance = Math.sqrt(
                (piecePosition.getRank()-targetPosition.getRank())**2
                +
                (piecePosition.getFile().charCodeAt(0)-targetPosition.getFile().charCodeAt(0))**2
        );
        return distance;
    }
}