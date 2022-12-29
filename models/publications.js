'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Publications.belongsTo(models.User);
    }
  }
  Publications.init({
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    nickname: DataTypes.STRING,
    offeredto: DataTypes.STRING,
    text: DataTypes.STRING,
    fulljourney: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Publications',
  });
  return Publications;
};