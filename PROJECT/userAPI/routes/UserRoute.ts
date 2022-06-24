import express, { NextFunction } from 'express';
import UserController from '../controllers/UserController';
import { Request, Response } from 'express';

let api = express.Router();

api.post('/user', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await UserController.create(req, res);
    } catch(error) {
        next(error);
    }
});
api.delete('/user/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await UserController.delete(req, res);
    } catch(error) {
        next(error);
    }
});

module.exports = api;