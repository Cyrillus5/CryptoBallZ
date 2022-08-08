const {Model, DataTypes} = require('sequelize');
const sequelize = require('../database');

class Users extends Model {};

Users.init({
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
    role: DataTypes.TEXT,    
}, {
    sequelize,
    tableName: 'users'
});

module.exports = Users;