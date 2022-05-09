import { File, Rank } from './types';

export default interface Move {
    id?: number;
    chess_id: number;
    piece: string;
    color: string;
    piece_id: number;
    rank: number;
    file: string;
}