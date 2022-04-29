let { Sequelize } = require('sequelize');
let handler = require("./handler");

export default class DBContext {
    static readonly db = new Sequelize('postgres://postgres:system32@localhost:5432/users');

    constructor() {
        handler.createModels();
        DBContext.db.authenticate().then(async () => {
            await DBContext.db.sync({ alter: true, match: /^users$/ });
        });
    }
}