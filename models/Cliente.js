const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Cliente extends Model {}

Cliente.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fone: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'Cliente',
  tableName: 'clientes',
  timestamps: false,
});

module.exports = Cliente;
