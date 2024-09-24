const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Produto = sequelize.define('Produto', {
    codigo: { type: DataTypes.STRING, allowNull: false, unique: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    preco: { type: DataTypes.FLOAT, allowNull: false }
});

module.exports = Produto;
