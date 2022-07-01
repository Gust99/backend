import { TYPES } from '../core/types';
import { Request, Response } from 'express';
import { myContainer } from '../inversify.config';
import { IAthendanceService } from '../core/IServices/IAthendanceService';

export default class AthendanceController {

    static athendanceService = myContainer.get<IAthendanceService>(TYPES.IAthendanceService);

    static async create(request: Request, response: Response) {
        const athendanceCreated = await AthendanceController.athendanceService.create(request.body);
        response.status(201).send({ data: athendanceCreated });
    }

    static async delete(request: Request, response: Response) {
        const id = request.params.id as unknown as string;
        const msg = await AthendanceController.athendanceService.delete(id);
        response.status(202).send({ message: msg });
    }

    static async getAllbyUserId(request: Request, response: Response) {
        const allUsers = await AthendanceController.athendanceService.getAllbyUserId(request.params.id);
        response.status(202).send({ data: allUsers });
    }

    static async deleteAllAthendancesByUserID(request: Request, response: Response) {
        const result = await AthendanceController.athendanceService.deleteAllAthendancesByUserID(request.params.id);
        response.status(202).send({ message: result });
    }
}