import { Container } from "inversify";
import { TYPES } from "../types";
import IUserRepository from "../IRepositories/IUserRepository";
import IUserSerivce from "../IServices/IUserService";
import UserRepository from "../../infraestructure/Repositories/UserRepository";
import UserService from "./UserService";

const myContainer = new Container();

myContainer.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);
myContainer.bind<IUserSerivce>(TYPES.IUserService).to(UserService);

export { myContainer };