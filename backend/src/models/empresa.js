const Sequelize = require('sequelize');
const database = require('../database/sqlite.js');

const Empresa = database.define('empresas', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  proprietario: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  nome: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  cnpj: {
    type: Sequelize.STRING(14),
    allowNull: false,
    unique: true,
  },
  website: {
    type: Sequelize.TEXT,
  },
  email: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  cep: {
    type: Sequelize.STRING(8),
    allowNull: false,
  },
  endereco: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  numero: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  bairro: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  cidade: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  estado: {
    type: Sequelize.STRING(2),
    allowNull: false,
  },
});

module.exports = Empresa;

