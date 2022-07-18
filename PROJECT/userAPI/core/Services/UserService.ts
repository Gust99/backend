import { inject, injectable } from 'inversify';
import { User } from '../Entities/user';
import { IUserRepository } from '../IRepositories/IUserRepository';
import { IUserService } from '../IServices/IUserService';
import { TYPES } from '../types';
// import ElasticService from './ElasticService';

@injectable()
export class UserService implements IUserService {
    private repository: IUserRepository;
    // private elasticService!: ElasticService;

    constructor(
        @inject(TYPES.IUserRepository) userRepository: IUserRepository
    ) {
        this.repository = userRepository;
        // this.elasticService = ElasticService.getInstance();
    }

    async create(user: User): Promise<User> {
        const userCreated = await this.repository.create(user);

        // await this.elasticService.populateIndex([user]);

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

    async updateAthendancesCount(userID: string, count: number): Promise<string> {
        const result = await this.repository.updateAthendancesCount(userID, count);
        return result;
    }
}