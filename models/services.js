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
      Services.belongsToMany(models.User, { through: 'contract' });
      Services.hasMany(models.Contract, {
        foreignKey: 'service_id'
      });
      Services.belongsTo(models.Publications, {
        foreignKey:'publication_id'
      })
    }
  }
  Services.init({
    publication_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }, 
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salary: {
      type: DataTypes.STRING,
    },
    typeofservice: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Services',
    timestamps: false,
  });
  return Services;
};