'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Services extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Services.belongsToMany(models.User);
      Services.hasMany(models.Contract, {
        foreignKey: 'service_id'
      });
      Services.belongsTo(models.Publications, {
        foreignKey:'publication_id'
      })
    }
  }
  Services.init({
    publication_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    nickname: DataTypes.STRING,
    offeredto: DataTypes.STRING,
    text: DataTypes.STRING,
    salary: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Services',
  });
  return Services;
};