import { Container } from "inversify";
import ChessRepository from "./infraestructure/Repositories/ChessRepository";
import IChessRepository from "./core/IRepositories/IChessRepository";
import IChessSerivce from "./core/IServices/IChessService";
import { TYPES } from "./core/types";
import ChessService from "./core/Services/ChessService";
import MoveRepository from "./infraestructure/Repositories/MoveRepository";
import IMoveRepository from "./core/IRepositories/IMoveRepository";

const myContainer = new Container();

myContainer.bind<IChessRepository>(TYPES.IChessRepository).to(ChessRepository);
myContainer.bind<IChessSerivce>(TYPES.IChessService).to(ChessService);

myContainer.bind<IMoveRepository>(TYPES.IMoveRepository).to(MoveRepository);

export { myContainer };