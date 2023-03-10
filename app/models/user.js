'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.Post, { foreignKey: 'userId', as: 'users' })
    }
  }
  Users.init({
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    avatar: DataTypes.STRING,
    refreshToken: DataTypes.STRING,
    roleId: DataTypes.STRING,
    buildingId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};