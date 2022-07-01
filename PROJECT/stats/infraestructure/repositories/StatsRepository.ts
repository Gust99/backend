import IStatsRepository from '../../core/IRepositories/IStatsRepository';

export default class StatsRepository implements IStatsRepository {
    updateUserAthendanceCount(userID: string): void {
        throw new Error('Method not implemented.');
    }
}