'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Post.hasMany(models.Product, { foreignKey: 'postId', as: 'product' })
            //Post.hasMany(models.Product, { foreignKey: 'postId', as: 'product' })
            Post.hasMany(models.Img, { foreignKey: 'postId', as: 'img' })

        }
    }
    Post.init({
        title: DataTypes.STRING,
        like: DataTypes.BOOLEAN,
        description: DataTypes.STRING,
        userId: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Post',
    });
    return Post;
};