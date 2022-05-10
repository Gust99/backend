import INotifier from './INotifier';

export class NotificationCenter<J extends INotifier<T,K>,T,K> {

    // notifyByEmail(user: User, message: string) {

    // }

    // notifyBySms(user: User, message: string) {

    // }

    //PROHIBIDO
    // notifyByFacebook(user: User, message: string) {

    // }

    constructor(
        private notifier: J
    ) {}

    notify(user: T, message: K) {
        this.notifier.send(user, message);
    }
}