import { injectable } from "inversify";
import { Repository, DataSource, QueryBuilder } from 'typeorm';
import { IUserRepository } from "../../core/IRepositories/IUserRepository";
import DBContext from "../DB/DBContext";
import { UserModel } from "../DB/models/User";
import { User } from '../../core/Entities/user';
import { BaseException } from "../../Handlers/Error/BaseException";
import { v4 as uuidv4} from 'uuid';
import axios from 'axios';

@injectable()
export default class UserRepository implements IUserRepository {

    static db: DataSource;
    static repository: Repository<UserModel>;
    static queryBuilder: QueryBuilder<UserModel>;

    constructor() {
        UserRepository.db = DBContext.db;
        UserRepository.repository = UserRepository.db.getRepository(UserModel);
        UserRepository.queryBuilder = DBContext.db.createQueryBuilder();
    }

    //TYPE ORM POSTGRESQL
    async create(user: User): Promise<User> {
        user.athendance = 0;
        try {
            user.id = uuidv4();
            const res = await UserRepository.repository.save(user);
            return res as User;
        } catch(error) {
            throw new BaseException(409,'Conflict creating user.');
        }
    }
    
    async delete(userID: string): Promise<string> {
        const user = await UserRepository.repository.findOneBy({id: userID});
        
        if(!user) { throw new BaseException(404,'User not found'); }

        let result;
        
        try {
            result = await axios.delete(`${process.env.SCHEDULE_API}/user/${userID}`);
        } catch(error) {
            throw new BaseException(500, 'Internal server error');
        }
            
        if(result.status !== 202) { throw new BaseException(500, 'Internal server error'); }

        await UserRepository.repository.delete(user as UserModel);
            
        return 'User deleted';
    }

    async getUsers(nickname: string, fullname: string): Promise<User[]> {
        try {
            let users: User[] = [];

            if(!nickname && !fullname) {
                users = await UserRepository.repository.find();
            } else {
                UserRepository.queryBuilder = DBContext.db.createQueryBuilder();
                users = await UserRepository.queryBuilder
                                .select('*')
                                .from(UserModel, 'user')
                                .where('user.nickname ~* :nickname', {nickname})
                                .orWhere('user.fullname ~* :fullname', {fullname})
                                .getRawMany();
            }

            return users as User[];
        } catch(error) {
            throw new BaseException(410, 'No content');
        }
    }

    async getUserFullData(userID: string): Promise<User> {
        try {
            const userAthendances = (await axios
                .get(`${process.env.SCHEDULE_API}/user/${userID}`))
                    .data;
            
            const user = <User>(await UserRepository.repository.findOneBy({id: userID}));

            user.athendanceList = userAthendances.data;
            
            return user;
        } catch(error) {
            throw new BaseException(404,'User not found');
        }
    }

    async getUserByID(userID: string): Promise<User> {
        try {
            const user = <User>(await UserRepository.repository.findOneBy({id: userID}));
            
            return user;
        } catch(error) {
            throw new BaseException(404,'User not found');
        }
    }

    async updateAthendancesCount(userID: string, count: number): Promise<string> {
        try {
            await UserRepository.repository.save({
                id: userID,
                athendance: count
            });

            return 'Athendances count created';
        } catch(error) {
            throw new BaseException(500, 'Update athendances count failed');
        }
    }
}