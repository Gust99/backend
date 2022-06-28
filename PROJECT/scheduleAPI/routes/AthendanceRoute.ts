import express, { NextFunction } from 'express';
import AthendanceController from '../controllers/AthendanceController';
import { Request, Response } from 'express';

const api = express.Router();

api.post('/athendances', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await AthendanceController.create(req, res);
    } catch(error) {
        next(error);
    }
});
api.delete('/athendances/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await AthendanceController.delete(req, res);
    } catch(error) {
        next(error);
    }
});
api.get('/athendances/user/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await AthendanceController.getAll(req, res);
    } catch(error) {
        next(error);
    }
});

module.exports = api;