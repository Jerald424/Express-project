const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class Comments extends Model { }

    Comments.init({
        title: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        tableName: "comments"
    });
    return Comments
}