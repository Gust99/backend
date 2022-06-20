import User from "../entities/User";
import IRepository from './IRepository';

export default interface IUserRepository extends IRepository<User> {
    update(user: User): void;
    delete(id: number): void;
    get(id: number): User;
}