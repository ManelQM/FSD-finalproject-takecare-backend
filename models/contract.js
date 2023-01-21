'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contract extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Contract.belongsTo(models.User, {
        foreignKey: 'user_id'
      });
      Contract.belongsTo(models.Services,{
        foreignKey: 'service_id'
      });
    }
  }
  Contract.init({
    user_id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER,
    nickname: DataTypes.STRING,
    title: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Contract',
    timestamps: false,
  });
  return Contract;
};