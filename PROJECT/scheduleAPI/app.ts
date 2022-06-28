import { Request, Response } from "express";
import { BaseException } from "./Handlers/Error/BaseException";

const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();

const AthendanceRouter = require('./routes/AthendanceRoute');

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/', AthendanceRouter);

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