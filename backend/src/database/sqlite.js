const Sequelize = require('sequelize');

const database = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite',
    define: {
        timestamps: false
    },
});

module.exports = database;

