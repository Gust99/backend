import { Client } from '@elastic/elasticsearch';
import { User } from '../../../stats/core/Entities/user';

export default class ElasticService {
    private static client: Client;
    private static instance: ElasticService;

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor() {
        this.connect();
        ElasticService.createIndex('Users');
    }

    static getInstance() {
        if(!ElasticService.instance) {
            ElasticService.instance =  new ElasticService();
        }

        return ElasticService.instance;
    }

    private connect() {
        console.log(process.env.ELASTIC_URI);
        ElasticService.client = new Client({node: process.env.ELASTIC_URI});
    }

    static async createIndex(index: string) {
        const indexExists = await ElasticService.client.indices.exists({index});
        
        if(!indexExists) {
            // eslint-disable-next-line no-useless-catch
            try {
                await ElasticService.client.indices.create({
                    index: index,
                    mappings: {
                        properties: {
                            id: { type: 'text' },
                            nickname: { type: 'text' },
                            fullname: { type: 'text' }
                        }
                    }
                });
            } catch(error) {
                throw error;
            }
        }
    }

    async populateIndex(users: User[]) {
        const documents: {
            [x:string]: {[y:string]: string} | string,
        }[] = [];

        users.forEach((user: User) => {
            documents.push({ index: { _index: 'Users', _type: 'Users' } });
            documents.push({id: user.id || '0', nickname: user.nickname, fullname: user.fullname});
        });

        ElasticService.client.bulk({operations: documents});
    }

    async searchUser(nickname?: string, fullname?: string) {
        const queryData = (nickname && fullname) 
                            ? {nickname,fullname} 
                            : (nickname) ? {nickname}
                            : (fullname) ? {fullname}
                            : {nickname:'',fullname:''};
        await ElasticService.client.search({
            index: 'Users',
            query: {
                match: queryData
            }
        })
    }
}