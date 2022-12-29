'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contactcaregiver extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, { 
        foreignKey: 'filmId' 
      }); 
      this.belongsTo(models.publication, { 
        foreignKey: 'userId' 
      });
    }
  }
  contactcaregiver.init({
    user_id: DataTypes.INTEGER,
    publication_id: DataTypes.INTEGER,
    message: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'contactcaregiver',
  });
  return contactcaregiver;
};