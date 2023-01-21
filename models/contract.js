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
        foreignKey: 'userid'
      });
      Contract.belongsTo(models.Publication,{
        foreignKey: 'publicationid'
      });
    }
  }
  Contract.init({
    userid: DataTypes.INTEGER,
    publicationid: DataTypes.INTEGER,
    nickname: DataTypes.STRING,
    title: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Contract',
    timestamps: false,
  });
  return Contract;
};