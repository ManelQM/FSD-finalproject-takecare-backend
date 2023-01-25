
    'use strict';
    const {
      Model
    } = require('sequelize');
    module.exports = (sequelize, DataTypes) => {
      class Publication extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
          // define association here
          Publication.belongsTo(models.User,  {
            foreignKey: 'userid'
          });
          Publication.hasMany(models.Contract, {
            foreignKey: 'publicationid'
          }) 
        }
      }
      Publication.init({
        title: {
         type: DataTypes.STRING,
        },
        nickname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        text: {
          type: DataTypes.STRING,
          allowNull: false, 
        },     
        //  fulljourney: {
        //   type: DataTypes.BOOLEAN,
        //   allowNull: false
        //  }, 
        // childrencare:{
        //   type: DataTypes.BOOLEAN,
        //   allowNull:false
        // },
        // disablecare: DataTypes.BOOLEAN,
        // elderlycare: DataTypes.BOOLEAN, 
        // age: DataTypes.STRING,
        userid: {
          type: DataTypes.INTEGER,
        }
      }, {
        sequelize,
        modelName: 'Publication',
        timestamps: false,
      });
      return Publication;
    };