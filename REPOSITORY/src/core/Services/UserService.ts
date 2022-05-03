import IUserService from '../IServices/IUserService';
import IUserRepository from '../IRepositories/IUserRepository';
import User from '../models/User';
import { inject, injectable } from 'inversify';
import { TYPES } from '../types';

@injectable()
export default class UserService implements IUserService {
    private repository: IUserRepository;

    constructor(@inject(TYPES.IUserRepository) userRepository: IUserRepository) {
        this.repository = userRepository;
    }

    create(object: User) {
        if(object.username > '') {
            this.repository.create(object);
        }
    }
}