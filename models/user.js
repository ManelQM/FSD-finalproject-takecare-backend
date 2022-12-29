'use strict';
const {
  Model
} = require('sequelize');
const { use } = require('../router');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role);
      User.hasMany(models.Publications);
      User.hasMany(models.Contract);
      User.belongsToMany(models.Services);
    }
  }
  User.init(
    {
      id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      age: DataTypes.INTEGER,
      roleuser_id: {
      type: DataTypes.STRING,
      allowNull: false,
    }
    
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};