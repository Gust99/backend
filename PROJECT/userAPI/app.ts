import { Request, Response } from "express";
import { BaseException } from "./Handlers/Error/BaseException";

let express = require('express');
let bodyparser = require('body-parser');
let cors = require('cors');

let app = express();

let UserRouter = require('./routes/UserRoute');

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/api', UserRouter);

app.use((
    err: BaseException,
    req: Request,
    res: Response,
    next: CallableFunction
) => {
    console.error(err);
    const code = err.statusCode || 500;
    res.status(code).json({
        code: code.toString(),
        message: err.message || 'Internal Server Error'
    });
});

module.exports = app;