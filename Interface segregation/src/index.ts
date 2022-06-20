import Log from "./entities/Log";
import User from "./entities/User";
import UserRepository from './repositories/UserRepository';
import LogRepository from './repositories/LogRepository';

const user = new User(1);
const log = new Log(1, 'a');

const userRepo = new UserRepository();
const logRepo = new LogRepository();

userRepo.get(1);
userRepo.insert(user);
userRepo.update(user);
userRepo.delete(1);

logRepo.insert(log);