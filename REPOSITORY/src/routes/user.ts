import express from 'express';
import cUser from '../controllers/user';
import { Request, Response } from 'express';

let api = express.Router();

api.post('/user/add', (request: Request, response: Response) => {
    cUser.create(request, response);
});

module.exports = api;