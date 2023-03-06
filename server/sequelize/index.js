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

db.Login = require('../models/login')(sequelize);
db.Post = require('../models/post')(sequelize);
db.Comments = require('../models/comments')(sequelize);

db.Login.hasMany(db.Post);
db.Login.hasOne(db.Comments);
db.Comments.belongsTo(db.Post);



db.sequelize.sync({ alter: true })

module.exports = db;