export default interface ILogger<T> {
    printObject(object: T): void;
}