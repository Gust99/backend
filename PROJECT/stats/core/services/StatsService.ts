import IStatsService from '../IServices/IStatsService';
import Consumer from './Consumer';

export default class StatsService implements IStatsService {
    private consumer: Consumer;

    constructor() {
        this.consumer = new Consumer();
        this.consumer.fetchData('athendances', this.updateUserAthendanceCount);
    }

    updateUserAthendanceCount(userID: string): void {
        console.log(userID);
    }
}