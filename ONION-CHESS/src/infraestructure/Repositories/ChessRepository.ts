import { injectable } from "inversify";
import { Repository, DataSource } from 'typeorm';
import Chess from '../../core/Domain/Chess';
import IChessRepository from "../../core/IRepositories/IChessRepository";
import DBContext from "../DB/DBContext";
import { ChessModel } from "../DB/DBModels/Chess";

@injectable()
export default class ChessRepository implements IChessRepository {

    static db: DataSource;
    static repository: Repository<ChessModel>;

    constructor() {
        ChessRepository.db = DBContext.db;
        ChessRepository.repository = ChessRepository.db.getRepository(ChessModel);
    }

    //TYPE ORM MYSQL
    async create(object: Chess) {
        const res = await ChessRepository.repository.save(object);
        return res.id;
    }
}