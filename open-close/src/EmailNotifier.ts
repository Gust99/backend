import INotifier from './INotifier';
import { User } from './user';

export default class EmailNotifier<T, K> implements INotifier<T, K> {
    send(user: T, message: K) {
        console.log(`Email ${user} => ${message}`);
    }    
}