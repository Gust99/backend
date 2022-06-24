import { TYPES } from '../core/types';
import { Request, Response } from 'express';
import { myContainer } from '../inversify.config';
import { IUserService } from '../core/IServices/IUserService';

export default class UserController {

    static userService = myContainer.get<IUserService>(TYPES.IUserService);

    static async create(request: Request, response: Response) {
        let userCreated = await UserController.userService.create(request.body);
        response.status(200).send(userCreated);
    }

    static async delete(request: Request, response: Response) {
        const id = request.params.id as unknown as number;
        let msg = await UserController.userService.delete(id);
        response.status(200).send(msg);
    }
}