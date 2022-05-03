import DBContext from './infraestructure/DB/DBContext';
import IUserSerivce from './core/IServices/IUserService';
import { myContainer } from "./inversify.config";
import { TYPES } from './core/types';

const dbContext = new DBContext();

let userService = myContainer.get<IUserSerivce>(TYPES.IUserService);

userService.create({username: "Gustavo", password: "123"});