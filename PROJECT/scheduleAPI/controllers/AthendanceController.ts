import { TYPES } from '../core/types';
import { Request, Response } from 'express';
import { myContainer } from '../inversify.config';
import { IAthendanceService } from '../core/IServices/IAthendanceService';

export default class AthendanceController {

    static athendanceService = myContainer.get<IAthendanceService>(TYPES.IAthendanceService);

    static async create(request: Request, response: Response) {
        const userCreated = await AthendanceController.athendanceService.create(request.body);
        response.status(201).send({ message: userCreated });
    }

    static async delete(request: Request, response: Response) {
        const id = request.params.id as unknown as string;
        const msg = await AthendanceController.athendanceService.delete(id);
        response.status(200).send({message: msg});
    }

    static async getAll(request: Request, response: Response) {
        const allUsers = await AthendanceController.athendanceService.getAll();
        response.status(200).send(allUsers);
    }
}