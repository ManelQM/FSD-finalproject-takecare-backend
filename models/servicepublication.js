'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class servicepublication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  servicepublication.init({
    servicerole_id: DataTypes.INTEGER,
    publication: DataTypes.STRING,
    date: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'servicepublication',
  });
  return servicepublication;
};