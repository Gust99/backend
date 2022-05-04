import IUserRepository from "../../core/IRepositories/IUserRepository";
import DBContext from "../DB_TYPE/DBContext";
import User from '../../core/Domain/User';
import { injectable } from "inversify";
import { UserModel } from "../DB_TYPE/DBModels/User";

@injectable()
export default class UserRepository implements IUserRepository {

    private db;

    constructor() {
        this.db = DBContext.db;
    }

    //SEQUELIZE
    // create(object: User) {
    //     this.db.models.User.create(object);
    // }

    //TYPE ORM MYSQL
    async create(object: User) {
        await this.db.getRepository(UserModel).save(object);
    }
}