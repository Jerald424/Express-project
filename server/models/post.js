const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class Post extends Model { }

    Post.init({
        title: {
            type: DataTypes.STRING
        },
        likes: {
            type: DataTypes.INTEGER
        }
    }, {
        sequelize,
        tableName: "post"
    });
    return Post

}