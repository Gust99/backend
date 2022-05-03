import { Container } from "inversify";
import { TYPES } from "./core/types";
import IUserRepository from "./core/IRepositories/IUserRepository";
import IUserSerivce from "./core/IServices/IUserService";
import UserRepository from "./infraestructure/Repositories/UserRepository";
import UserService from "./core/Services/UserService";

const myContainer = new Container();

myContainer.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);
myContainer.bind<IUserSerivce>(TYPES.IUserService).to(UserService);

export { myContainer };