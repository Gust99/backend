import Chess from '../Domain/Entities/Chess';
import { Color, PieceGameID } from '../Domain/Logic/types';
import Position from '../Domain/Logic/Position';

export default interface IChessSerivce {
    move(id: number, pieceID: PieceGameID, position: Position): Promise<boolean>;
    create(object: Chess): Promise<number>;
    restart(id: number): void;
}