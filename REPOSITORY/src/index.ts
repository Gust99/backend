import DBContext from './infraestructure/DB/DBContext';
import UserService from './infraestructure/Services/UserService';

const dbContext = new DBContext();

let userService = new UserService();

userService.create({username: "Gustavo", password: "123"});