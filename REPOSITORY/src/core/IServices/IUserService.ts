import User from '../models/User';

export default interface IUserSerivce {
    create(object: User): void;
}