import { TYPES } from '../core/types';
import { Request, Response } from 'express';
import { myContainer } from '../inversify.config';
import { IUserService } from '../core/IServices/IUserService';

export default class UserController {

    static userService = myContainer.get<IUserService>(TYPES.IUserService);

    static async create(request: Request, response: Response) {
        let userCreated = await UserController.userService.create(request.body);
        response.status(201).send({ message: userCreated });
    }

    static async delete(request: Request, response: Response) {
        const id = request.params.id as unknown as string;
        let msg = await UserController.userService.delete(id);
        response.status(200).send(msg);
    }

    static async getAll(request: Request, response: Response) {
        let allUsers = await UserController.userService.getAll();
        response.status(200).send(allUsers);
    }

    static async find(request: Request, response: Response) {
        const nickname = <string>request.query.nickname || '';
        const fullname = <string>request.query.fullname || '';

        let usersFound = await UserController.userService.find(
            nickname,
            fullname
        );
    }
}