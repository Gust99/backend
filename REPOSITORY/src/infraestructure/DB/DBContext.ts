let { Sequelize } = require('sequelize');

class DBContext {
    static readonly db = new Sequelize('postgres://postgres:system32@localhost:5432/users');

    constructor() {
        DBContext.db.authenticate().then(async () => {
            await DBContext.db.sync({ alter: true, match: /^music2$/ });
        });
    }
}