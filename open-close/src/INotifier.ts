export default interface INotifier<T,K> {
    send(user: T, message: K): void;
}