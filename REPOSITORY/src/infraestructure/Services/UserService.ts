import IUserService from '../../core/IServices/IUserService';
import IUserRepository from '../../core/IRepositories/IUserRepository';
import UserRepository from '../Repositories/UserRepository';
import User from '../../core/models/User';

export default class UserService implements IUserService {
    private repository: IUserRepository;

    constructor() {
        this.repository = new UserRepository();
    }

    create(object: User) {
        if(object.username > '') {
            this.repository.create(object);
        }
    }
}