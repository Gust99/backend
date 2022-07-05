import { TYPES } from '../core/types';
import { Request, Response } from 'express';
import { myContainer } from '../inversify.config';
import { IUserService } from '../core/IServices/IUserService';

export default class UserController {

    static userService = myContainer.get<IUserService>(TYPES.IUserService);

    static async create(request: Request, response: Response) {
        const userCreated = await UserController.userService.create(request.body);
        response.status(201).send({ data: userCreated });
    }

    static async delete(request: Request, response: Response) {
        const id = request.params.id as unknown as string;
        const msg = await UserController.userService.delete(id);
        response.status(202).send({message: msg});
    }

    static async getUsers(request: Request, response: Response) {
        const nickname = <string><unknown>request.query.nickname;
        const fullname = <string><unknown>request.query.fullname;

        const allUsers = await UserController.userService.getUsers(nickname, fullname);
        response.status(202).send({data: allUsers});
    }

    static async getUserFullData(request: Request, response: Response) {
        const userData = await UserController.userService.getUserFullData(request.params.id);
        response.status(202).send({data: userData});
    }

    static async getUserByID(request: Request, response: Response) {
        const user = await UserController.userService.getUserByID(request.params.id);
        response.status(202).send({data: user});
    }

    static async updateAthendancesCount(request: Request, response: Response) {
        const userID = request.body.userID;
        const count = request.body.count;
        const result = await UserController.userService.updateAthendancesCount(userID, count);
        response.status(202).send({message: result});
    }
}