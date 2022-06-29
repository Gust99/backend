import express, { NextFunction } from 'express';
import UserController from '../controllers/UserController';
import { Request, Response } from 'express';

const api = express.Router();

api.post('/users', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await UserController.create(req, res);
    } catch(error) {
        next(error);
    }
});
api.delete('/users/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await UserController.delete(req, res);
    } catch(error) {
        next(error);
    }
});
api.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await UserController.getUsers(req, res);
    } catch(error) {
        next(error);
    }
});
api.get('/users/detail/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await UserController.getUserFullData(req, res);
    } catch(error) {
        next(error);
    }
});
api.get('/users/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await UserController.getUserByID(req, res);
    } catch(error) {
        next(error);
    }
});

module.exports = api;