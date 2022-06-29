import "reflect-metadata";
import DBContext from './infraestructure/DB/DBContext';

const app = require('./app');
const port = 3001;

const dbContext = new DBContext().initDB().then(() => {
    app.listen(port, () => {
        console.log('Server up.');
    });
});