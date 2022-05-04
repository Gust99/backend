let express = require('express');
let bodyparser = require('body-parser');
let cors = require('cors');

let app = express();

let usuarioRouter = require('./routes/user');

app.use(cors());

// app.use(cors({
//     origin: ['https://www.section.io', 'https://www.google.com/']
// }));

// app.use(cors({
//     origin: '*'
// }));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/api', usuarioRouter);

module.exports = app;