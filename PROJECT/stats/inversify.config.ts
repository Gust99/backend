import { Container } from "inversify";
import { TYPES } from "./core/types";
import IStatsRepository from './core/IRepositories/IStatsRepository';
import StatsRepository from './infraestructure/repositories/StatsRepository';
import IStatsService from './core/IServices/IStatsService';
import StatsService from './core/services/StatsService';

const myContainer = new Container();

myContainer.bind<IStatsRepository>(TYPES.IStatsRepository).to(StatsRepository);
myContainer.bind<IStatsService>(TYPES.IStatsService).to(StatsService);

export { myContainer };