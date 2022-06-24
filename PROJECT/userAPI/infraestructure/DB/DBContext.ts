import { DataSource } from "typeorm";
import { UserModel } from './models/User';

export default class DBContext {
    static db = new DataSource({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "system32",
        database: "project_backend",
        synchronize: true,
        logging: true,
        entities: [UserModel],
        subscribers: [],
        migrations: [],
    });

    async initDB() {
        await DBContext.db.initialize();
    }
}