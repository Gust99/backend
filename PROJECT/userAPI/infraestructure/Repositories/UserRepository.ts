import { injectable } from "inversify";
import { Repository, DataSource } from 'typeorm';
import { IUserRepository } from "../../core/IRepositories/IUserRepository";
import DBContext from "../DB/DBContext";
import { UserModel } from "../DB/models/User";
import { User } from '../../core/Entities/user';
import { BaseException } from "../../Handlers/Error/BaseException";

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
        try {
            const res = await UserRepository.repository.save(user);
            return res as User;
        } catch(error) {
            throw new BaseException(409,'Conflict creating user.');
        }
    }
    
    async delete(userID: number): Promise<string> {
        try {
            const user = await UserRepository.repository.findOneBy({id: userID});
            const res = await UserRepository.repository.delete(user as UserModel);
            return 'User deleted';
        } catch(error) {
            throw new BaseException(404,'User not found.');
        }
    }
}