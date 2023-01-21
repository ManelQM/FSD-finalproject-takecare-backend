    
    'use strict';
    const {
      Model
    } = require('sequelize');
    const { use } = require('../router');
    module.exports = (sequelize, DataTypes) => {
      class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
          // define association here
          User.belongsTo(models.Role,  {
            foreignKey: 'idrole'
          });
          User.hasMany(models.Publications, {
            foreignKey: 'user_id'
          });
          User.hasMany(models.Contract, {
            foreignKey: 'user_id'
          });
          User.belongsToMany(models.Services, {through:'Contract'});
        }
      }
      User.init(
        {
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false
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
          allowNull: false
        }
      }, {
        sequelize,
        modelName: 'User',
        timestamps: false,
      });
      return User;
    };