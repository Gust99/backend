import { DataSource } from "typeorm";
import { ChessModel } from './DBModels/Chess';
import { MoveModel } from './DBModels/Move';

export default class DBContext {
    static db = new DataSource({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "",
        database: "onion_chess",
        synchronize: true,
        logging: true,
        entities: [ChessModel, MoveModel],
        subscribers: [],
        migrations: [],
    });

    constructor() {
        
    }

    async initDB() {
        await DBContext.db.initialize();
    }
}