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
        let userCreated = await this.repository.create(user);
        return userCreated;
    }
    async delete(userID: number): Promise<string> {
        let userDeleted = await this.repository.delete(userID);
        return userDeleted;
    }
    
}