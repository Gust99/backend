import { injectable } from "inversify";
import { IAthendanceRepository } from "../../core/IRepositories/IAthendanceRepository";
import { AthendanceModel } from "../DB/models/Athendance";
import { Athendance } from '../../core/Entities/athendance';
import { BaseException } from "../../Handlers/Error/BaseException";

@injectable()
export default class AthendanceRepository implements IAthendanceRepository {
    //Mongoose
    async create(athendance: Athendance): Promise<Athendance> {
        try {
            const newAthendance = new AthendanceModel(athendance);
            const res = await newAthendance.save();
            return newAthendance as Athendance;
        } catch(error) {
            throw new BaseException(409,'Conflict creating user.');
        }
    }
    
    async delete(athendanceID: string): Promise<string> {
        try {
            // const user = await AthendanceRepository.repository.findOneBy({id: athendanceID});
            // const res = await AthendanceRepository.repository.delete(user as AthendanceModel);
            return 'Athendance deleted';
        } catch(error) {
            throw new BaseException(404,'Athendance not found');
        }
    }

    async getAll(): Promise<Athendance[]> {
        try {
            let athendances: Athendance[] = [];

            athendances = await AthendanceModel.find().exec();

            return athendances as Athendance[];
        } catch(error) {
            throw new BaseException(410, 'No content');
        }
    }
}