import User from '../core/Domain/User';
import IUserSerivce from '../core/IServices/IUserService';
import { myContainer } from "../core/Services/inversify.config";
import { TYPES } from '../core/types';
import { Request, Response } from 'express';

export default class cUser {
    
    static userService = myContainer.get<IUserSerivce>(TYPES.IUserService);

    static create(request: Request, response: Response) {
        try {
            cUser.userService.create(request.body);
            response.status(200).send({ msg: 'Created' });
        } catch(err) {
            response.status(500).send({ msg: 'Error while creating user' });
        }
    }
}