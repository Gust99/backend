type Constructor<T> = new (...args: any[]) => T;

export default class GenericFactory {
    static createProduct<T>(constructor: Constructor<T>): T {
        return new constructor();
    }
}