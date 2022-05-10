// import express from 'express';
import { Invoice } from './Entities/invoice';
import { Book } from './Entities/book';
import CSV from './Services/CSV';
import Exporter from './Services/Exporter';
import Logger from './Services/Logger';
import InvoiceCalculator from './Services/InvoiceCalculator';

// const app = express();
// const port = 3000;

// app.get('/', (request, response) => {
//     response.send('Hello World!');
// });

// app.listen(port, ()=> console.log(`server listening on ${port}`));

const book = new Book('A','A',2022,40,'isbn');
const invoice = new Invoice(book, 5, 1, 6);

const exporter = new Exporter<CSV<Invoice>>(new CSV(invoice));
exporter.save();

const logger = new Logger<Invoice | number | string>();
logger.printObject(invoice);

const innvoiceCalculator = new InvoiceCalculator();
const total = innvoiceCalculator.calculateTotal(invoice);

logger.printObject(total);