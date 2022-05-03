import User from '../Domain/User';

export default interface IUserRepository {
    create(object: User): void;
}