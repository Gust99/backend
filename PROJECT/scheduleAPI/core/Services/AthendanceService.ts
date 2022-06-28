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

    async create(user: Athendance): Promise<Athendance> {
        const userCreated = await this.repository.create(user);
        return userCreated;
    }
    async delete(userID: string): Promise<string> {
        const userDeleted = await this.repository.delete(userID);
        return userDeleted;
    }
    
    async getAll(): Promise<Athendance[]> {
        const users = await this.repository.getAll();
        return users;
    }
}