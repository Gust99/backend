import { DataSource } from "typeorm";
import { UserModel } from './DBModels/User';

export default class DBContext {
    static db = new DataSource({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "",
        database: "user",
        synchronize: true,
        logging: true,
        entities: [UserModel],
        subscribers: [],
        migrations: [],
    });

    constructor() {
        
    }

    async initDB() {
        await DBContext.db.initialize();
    }
}