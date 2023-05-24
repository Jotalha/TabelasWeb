const Sequelize = require("sequelize");

// Conexão com o banco de dados MySQL - PRIMEIRO PASSO
const connection = new Sequelize("aula1", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
  timezone: "-03:00",
});

module.exports = connection;
