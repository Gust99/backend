import Log from '../entities/Log';
import ILogRepository from '../interfaces/ILogRepository';

export default class LogRepository implements ILogRepository {
    insert(log: Log): void {
        console.log(log);
    }
}