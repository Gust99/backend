import { User } from '../Entities/user';

export interface IUserRepository {
    create(user: User): Promise<User>;
    delete(userID: number): Promise<string>;
}