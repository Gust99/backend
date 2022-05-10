import ILogger from '../IServices/ILogger';
export default class Logger<T> implements ILogger<T> {
    printObject(object: T) {
        console.log(object);
    }
}