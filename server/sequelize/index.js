const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    database: 'expressproject',
    username: 'postgres',
    password: 'apple',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    logging: false
})

try {
    sequelize.authenticate()
    console.log('database connect successfully')
} catch (error) {
    console.log(error?.message)
}

const db = {};

db.sequelize = sequelize;

db.Login = require('../models/login')(sequelize)

db.sequelize.sync()

module.exports = db;