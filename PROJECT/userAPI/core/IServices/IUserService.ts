import { User } from '../Entities/user';

export interface IUserService {
    create(user: User): Promise<User>;
    delete(userID: number): Promise<string>;
}