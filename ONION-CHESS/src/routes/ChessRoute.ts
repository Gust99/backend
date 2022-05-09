import express from 'express';
import ChessController from '../controllers/ChessController';
import { Request, Response } from 'express';

let api = express.Router();

api.post('/chess/start', (request: Request, response: Response) => {
    ChessController.create(request, response);
});

api.post('/chess/move', (request: Request, response: Response) => {
    ChessController.move(request, response);
});

api.post('/chess/restart', (request: Request, response: Response) => {
    ChessController.restart(request, response);
});

module.exports = api;