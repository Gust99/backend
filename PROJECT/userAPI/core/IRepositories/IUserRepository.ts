import { User } from '../Entities/user';

export interface IUserRepository {
    create(user: User): Promise<User>;
    delete(userID: string): Promise<string>;
    getUsers(nickname?: string, fullname?: string): Promise<User[]>;
}