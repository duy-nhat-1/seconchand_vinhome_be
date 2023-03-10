'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Product.belongsTo(models.Category, { foreignKey: 'categoryId', targetKey: 'id', as: 'category' })
        }
    }
    Product.init({
        productName: DataTypes.STRING,
        price: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
        categoryId: DataTypes.STRING,
        postId: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};