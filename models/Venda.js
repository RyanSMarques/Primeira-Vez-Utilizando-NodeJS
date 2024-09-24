const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Venda extends Model {}

Venda.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  codigo_produto: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_cliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'Venda',
  tableName: 'vendas',
  timestamps: false,
});

module.exports = Venda;
