const Sequelize = require('sequelize');
const database = require('../database/sqlite.js');

const Pessoa = database.define('pessoas', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING(11),
    allowNull: false,
    unique: true,
  },
  dataNascimento: {
    type: Sequelize.STRING(10),
    allowNull: false,
  },
  sexo: {
    type: Sequelize.STRING(1),
    allowNull: false,
  },
  email: {
    type: Sequelize.TEXT,
    allowNull: false,
    unique: true,
  },
  telefone: {
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

module.exports = Pessoa;

