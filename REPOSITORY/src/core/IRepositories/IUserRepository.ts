import User from '../models/User';

export default interface IUserRepository {
    create(object: User): void;
}