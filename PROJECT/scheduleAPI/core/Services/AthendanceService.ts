import { inject, injectable } from 'inversify';
import { Athendance } from '../Entities/athendance';
import { IAthendanceRepository } from '../IRepositories/IAthendanceRepository';
import { IAthendanceService } from '../IServices/IAthendanceService';
import { TYPES } from '../types';

@injectable()
export class AthendanceService implements IAthendanceService {
    private repository: IAthendanceRepository;

    constructor(
        @inject(TYPES.IAthendanceRepository) athendanceRepository: IAthendanceRepository
    ) {
        this.repository = athendanceRepository;
    }

    async create(athendance: Athendance): Promise<Athendance> {
        const athendanceCreated = await this.repository.create(athendance);
        return athendanceCreated;
    }
    async delete(userID: string): Promise<string> {
        const athendanceDeleted = await this.repository.delete(userID);
        return athendanceDeleted;
    }
    
    async getAllbyUserId(userID: string): Promise<Athendance[]> {
        const users = await this.repository.getAllbyUserId(userID);
        return users;
    }
}