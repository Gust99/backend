import { Container } from "inversify";
import { TYPES } from "./core/types";
import { AthendanceService } from "./core/Services/AthendanceService";
import { IAthendanceRepository } from "./core/IRepositories/IAthendanceRepository";
import AthendanceRepository from "./infraestructure/Repositories/AthendanceRepository";

const myContainer = new Container();

myContainer.bind<IAthendanceRepository>(TYPES.IAthendanceRepository).to(AthendanceRepository);
myContainer.bind<AthendanceService>(TYPES.IAthendanceService).to(AthendanceService);

export { myContainer };