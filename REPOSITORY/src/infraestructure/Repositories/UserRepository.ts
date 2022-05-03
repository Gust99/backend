import IUserRepository from "../../core/IRepositories/IUserRepository";
import DBContext from "../DB/DBContext";
import User from '../../core/models/User';
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export default class UserRepository implements IUserRepository {

    private db;

    constructor() {
        this.db = DBContext.db;
    }

    create(object: User) {
        this.db.models.User.create(object);
    }
}