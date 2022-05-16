import Piece from '../../abstracts/Piece';
import { PieceTeamID, Color } from '../types';

export default class PieceMapper {
    getPieceIndex(pieceTeamID: PieceTeamID, color: Color, pieces: Piece[]): number {
        return pieces.findIndex(piece => {
            return piece.getID().teamID === pieceTeamID && piece.getColor() === color;
        });
    }
}