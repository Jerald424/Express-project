const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class Login extends Model { };

    Login.init({
        username: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        tableName: 'login'
    })
    return Login;
}