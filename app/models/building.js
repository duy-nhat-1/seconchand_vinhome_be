'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Building extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            //  Building.hasMany(models.Users, { foreignKey: 'buildingId', as: 'building' })
            Building.hasMany(models.Users, { foreignKey: 'buildingId', as: 'building' })
        }
    }
    Building.init({

    }, {
        sequelize,
        modelName: 'Building',
    });
    return Building;
};