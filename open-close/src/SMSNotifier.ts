import INotifier from './INotifier';
export default class SMSNotifier<T, K> implements INotifier<T, K> {
    send(user: T, object: K) {
        console.log(`SMS ${user} => ${object}`);
    }
}