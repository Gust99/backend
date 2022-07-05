import IStatsService from '../IServices/IStatsService';
import Consumer from './Consumer';
import axios from 'axios';

export default class StatsService implements IStatsService {
    private consumer: Consumer;

    constructor() {
        this.consumer = new Consumer();
        this.consumer.fetchData('athendances', this.updateUserAthendanceCount);
    }

    async updateUserAthendanceCount(userID: string): Promise<void> {
        userID = userID.split('"')[1];

        const responseData = (await axios.get(`${process.env.SCHEDULE_API}/athendances/user/${userID}`,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })).data;

        const athendancesCount = responseData.data.length;

        console.log('COUNT', athendancesCount);

        const updateResponse = await axios.put(`${process.env.USER_API}/users/athendance`,
        {
            userID: userID, 
            count: athendancesCount
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log('UPDATE RESPONSE', updateResponse);
    }
}