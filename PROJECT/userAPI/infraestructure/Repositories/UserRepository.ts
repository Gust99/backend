import { injectable } from "inversify";
import { Repository, DataSource } from 'typeorm';
import { IUserRepository } from "../../core/IRepositories/IUserRepository";
import DBContext from "../DB/DBContext";
import { UserModel } from "../DB/models/User";
import { User } from '../../core/Entities/user';
import { BaseException } from "../../Handlers/Error/BaseException";
import { v4 as uuidv4} from 'uuid';

@injectable()
export default class UserRepository implements IUserRepository {

    static db: DataSource;
    static repository: Repository<UserModel>;

    constructor() {
        UserRepository.db = DBContext.db;
        UserRepository.repository = UserRepository.db.getRepository(UserModel);
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
        try {
            const user = await UserRepository.repository.findOneBy({id: userID});
            const res = await UserRepository.repository.delete(user as UserModel);
            return 'User deleted';
        } catch(error) {
            throw new BaseException(404,'User not found.');
        }
    }

    async getAll(): Promise<User[]> {
        try {
            const users = await UserRepository.repository.find();
            return users as User[];
        } catch(error) {
            throw new BaseException(410, 'No content');
        }
    }

    async find(nickname: string, fullname: string): Promise<User[]> {
        try {
            const usersFound = await UserRepository.repository.findBy({
                nickname: nickname,
                fullname: fullname
            });
            return usersFound as User[];
        } catch(error) {
            throw new BaseException(404, 'Not found');
        }
    }
}