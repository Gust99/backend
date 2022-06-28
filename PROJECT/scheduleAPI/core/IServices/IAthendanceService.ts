import { Athendance } from '../Entities/athendance';

export interface IAthendanceService {
    create(athendance: Athendance): Promise<Athendance>;
    delete(athendanceID: string): Promise<string>;
    getAll(): Promise<Athendance[]>;
}