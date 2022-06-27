import { User } from '../Entities/user';

export interface IUserService {
    create(user: User): Promise<User>;
    delete(userID: string): Promise<string>;
    getAll(): Promise<User[]>;
    find(nickname: string, fullname: string): Promise<User[]>;
}