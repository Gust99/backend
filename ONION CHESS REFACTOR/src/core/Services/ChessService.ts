import { inject, injectable } from 'inversify';
import Chess from '../Domain/Entities/Chess';
import IChessRepository from '../IRepositories/IChessRepository';
import IChessService from '../IServices/IChessService';
import { TYPES } from '../types';
import Game from '../Domain/Logic/Game';
import Position from '../Domain/Logic/Position';
import { Color, PieceGameID } from '../Domain/Logic/types';
import GameStatus from '../Domain/interfaces/GameStatus';
import IMoveRepository from '../IRepositories/IMoveRepository';

@injectable()
export default class ChessService implements IChessService {
    private repository: IChessRepository;
    private moveRepository: IMoveRepository;
    static games: {game: Game,id: number}[] = [];

    constructor(
        @inject(TYPES.IChessRepository) chessRepository: IChessRepository,
        @inject(TYPES.IMoveRepository) moveRepository: IMoveRepository
    ) {
        this.repository = chessRepository;
        this.moveRepository = moveRepository;
    }

    async create(object: Chess) {
        let id = await this.repository.create(object)
        .then(res => {
            let game = new Game({
                pieces: [],
                positions: [],
                whiteKilledPieces: [],
                blackKilledPieces: [],
                whiteTurn: true
            });
            game.start();
            ChessService.games.push({game: game, id: res});
            return res;
        });
        return id;
    }

    async move(id: number, pieceID: PieceGameID, position: Position) {
        let success = ChessService.games.find(game => game.id === id)
        ?.game.next(pieceID, position) || false;

        if(success) {
            // await this.moveRepository.create(id, {
            //     // chess_id: id,
            //     // piece: piece,
            //     // piece_id: pieceID,
            //     // rank: position.getRank(),
            //     // file: position.getFile()
            // });
        }

        return success;
    }

    restart(id: number): GameStatus {
        let data = ChessService.games.find(game => game.id === id)
        ?.game.restart();

        if(!data) {
            throw new Error();
        }
        
        return data;
    }
}