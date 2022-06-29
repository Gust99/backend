import { inject, injectable } from 'inversify';
import { User } from '../Entities/user';
import { IUserRepository } from '../IRepositories/IUserRepository';
import { IUserService } from '../IServices/IUserService';
import { TYPES } from '../types';

@injectable()
export class UserService implements IUserService {
    private repository: IUserRepository;

    constructor(
        @inject(TYPES.IUserRepository) userRepository: IUserRepository
    ) {
        this.repository = userRepository;
    }

    async create(user: User): Promise<User> {
        const userCreated = await this.repository.create(user);
        return userCreated;
    }
    async delete(userID: string): Promise<string> {
        const userDeleted = await this.repository.delete(userID);
        return userDeleted;
    }
    
    async getUsers(nickname: string, fullname: string): Promise<User[]> {
        const users = await this.repository.getUsers(nickname, fullname);
        return users;
    }

    async getUserFullData(userID: string): Promise<User> {
        const userData = await this.repository.getUserFullData(userID);
        return userData;
    }

    async getUserByID(userID: string): Promise<User> {
        const user = await this.repository.getUserByID(userID);
        return user;
    }
}