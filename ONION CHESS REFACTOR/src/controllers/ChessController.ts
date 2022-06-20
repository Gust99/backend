import { TYPES } from '../core/types';
import { Request, Response } from 'express';
import { myContainer } from '../inversify.config';
import IChessSerivce from '../core/IServices/IChessService';
import Position from '../core/Domain/Logic/Position';

export default class ChessController {
    
    static chessService = myContainer.get<IChessSerivce>(TYPES.IChessService);

    static async create(request: Request, response: Response) {
        try {
            let id = await ChessController.chessService.create(request.body);
            response.status(200).send({ id: id });
        } catch(err) {
            response.status(500).send({ msg: err });
        }
    }

    static async move(request: Request, response: Response) {
        let params = request.body;
        let position = new Position(params.position.rank, params.position.file);
        try {
            let success = await ChessController.chessService.move(params.id, params.pieceID, position);
            response.status(200).send({success});
        } catch(err) {
            response.status(500).send({ msg: 'Error while creating user' });
        }
    }

    static restart(request: Request, response: Response) {
        let params = request.body;

        let data = ChessController.chessService.restart(params.id);
        response.status(200).send({data});
    }
}