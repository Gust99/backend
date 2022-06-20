import { injectable } from "inversify";
import { Repository, DataSource } from 'typeorm';
import Move from "../../core/Domain/Entities/Move";
import IMoveRepository from "../../core/IRepositories/IMoveRepository";
import DBContext from "../DB/DBContext";
import { MoveModel } from "../DB/DBModels/Move";

@injectable()
export default class MoveRepository implements IMoveRepository {

    static db: DataSource;
    static repository: Repository<MoveModel>;

    constructor() {
        MoveRepository.db = DBContext.db;
        MoveRepository.repository = MoveRepository.db.getRepository(MoveModel);
    }

    //TYPE ORM MYSQL
    async create(chessID: number, object: Move) {
        const res = await MoveRepository.repository.save(object)
        .then(res => {
            return typeof res === 'number';
        });
        return res;
    }
}