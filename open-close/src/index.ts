import { User } from './user';
import { NotificationCenter } from './notification-center';
import EmailNotifier from './EmailNotifier';

let user = new User();

let notificationCenter = new NotificationCenter<EmailNotifier<User,string>,User,string>(new EmailNotifier());

notificationCenter.notify(user, 'Hola mundo');