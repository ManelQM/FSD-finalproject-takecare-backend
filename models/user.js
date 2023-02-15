"use strict";
const { Model } = require("sequelize");
const { use } = require("../router");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role, {
        foreignKey: "idrole",
      });
      User.hasMany(models.Publication, {
        constraints: false,
        foreignKey: "userid",
      });
      User.hasMany(models.Contract, {
        constraints: false, 
        foreignKey: "userid",
      });
      // User.belongsToMany(models.Services, {through:'Contract'});
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
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
      surname: DataTypes.STRING,
      city: DataTypes.STRING,
      avatar: DataTypes.STRING,
      age: DataTypes.STRING,
      caregiver: DataTypes.BOOLEAN,
      idrole: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      timestamps: false,
    }
  );
  return User;
};
