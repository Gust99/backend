import User from '../Domain/User';

export default interface IUserSerivce {
    create(object: User): void;
}