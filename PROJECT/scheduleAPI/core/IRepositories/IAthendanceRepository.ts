import { Athendance } from '../Entities/athendance';

export interface IAthendanceRepository {
    create(athendance: Athendance): Promise<Athendance>;
    delete(athendanceID: string): Promise<string>;
    getAllbyUserId(userID: string): Promise<Athendance[]>;
    deleteAllAthendancesByUserID(userID: string): Promise<string>;
}