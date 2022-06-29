import { injectable } from "inversify";
import { IAthendanceRepository } from "../../core/IRepositories/IAthendanceRepository";
import { AthendanceModel } from "../DB/models/Athendance";
import { Athendance } from '../../core/Entities/athendance';
import { BaseException } from "../../Handlers/Error/BaseException";
import axios from 'axios';

@injectable()
export default class AthendanceRepository implements IAthendanceRepository {
    //Mongoose
    async create(athendance: Athendance): Promise<Athendance> {
        try {
            const user = (await axios
                            .get(`http://localhost:3000/users/${athendance.userID}`))
                                .data;

            if(!user.data) { throw new BaseException(404,'User not found') }

            const newAthendance = new AthendanceModel(athendance);
            
            await newAthendance.save();
            
            return newAthendance as Athendance;
        } catch(error) {
            throw new BaseException(409,'Conflict creating athendance.');
        }
    }
    
    async delete(athendanceID: string): Promise<string> {
        try {
            const result = await AthendanceModel.findOne({ _id: athendanceID }).exec();

            if(!result) { throw new BaseException(404, 'Athendance not found') }
            
            await AthendanceModel.deleteOne({ _id: athendanceID }).exec();
            
            return 'Athendance deleted';
        } catch(error) {
            throw new BaseException(404,'Athendance not found');
        }
    }

    async getAllbyUserId(userID: string): Promise<Athendance[]> {
        try {
            let athendances: Athendance[] = [];

            athendances = await AthendanceModel.find({ userID: userID }).exec();

            return athendances as Athendance[];
        } catch(error) {
            throw new BaseException(410, 'No content');
        }
    }
}