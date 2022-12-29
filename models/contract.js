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
      Contract.belongsTo(models.user);
      Contract.belongsTo(models.services);
    }
  }
  Contract.init({
    user_id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER,
    nickname: DataTypes.STRING,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Contract',
  });
  return Contract;
};