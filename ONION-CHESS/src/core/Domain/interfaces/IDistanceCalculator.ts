import Position from "../Logic/Position";
import { Rank, File } from "../Logic/types";

export default interface IDistanceCalculator {
    getRankDistance(pieceRank: Rank,positionRank: Rank): number;
    getFileDistance(pieceFile: File, positionFile: File): number;
    euclideanDistance(piecePosition: Position, targetPosition: Position): number;
}