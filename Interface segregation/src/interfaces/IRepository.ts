export default interface IRepository<T> {
    insert(user: T): void;
}