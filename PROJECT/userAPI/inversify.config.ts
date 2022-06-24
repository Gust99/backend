import { Container } from "inversify";
import { TYPES } from "./core/types";
import UserRepository from "./infraestructure/Repositories/UserRepository";
import { UserService } from "./core/Services/UserService";
import { IUserRepository } from "./core/IRepositories/IUserRepository";

const myContainer = new Container();

myContainer.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);
myContainer.bind<UserService>(TYPES.IUserService).to(UserService);

export { myContainer };