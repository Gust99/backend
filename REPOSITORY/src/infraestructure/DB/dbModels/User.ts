let { DataTypes } = require('sequelize');

const User = DBContext.db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(200),
        allowNull: false
    }
});