import User from '../entities/User';
import IUserRepository from '../interfaces/IUserRepository';

export default class UserRepository implements IUserRepository {
    insert(user: User): void {
        console.log('User inserted');
    }
    update(user: User): void {
        console.log('User updated');
    }
    get(id: number): User {
        console.log('User founded');
        return new User(id);
    }
    delete(id: number): void {
        console.log('User deleted');
    }
}