import Chess from '../Domain/Chess';
import { Color, PieceID } from '../Domain/types';
import Position from '../Domain/Position';

export default interface IChessSerivce {
    move(id: number, pieceID: PieceID, piece: string, color: Color, position: Position): Promise<boolean>;
    create(object: Chess): Promise<number>;
    restart(id: number): void;
}