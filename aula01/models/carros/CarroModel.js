const Sequelize = require("sequelize");
const connection = require("../../database/database");

// criando objeto/tabela musica no banco de dados - QUARTO PASSO
const Carro = connection.define("carros", {
  modelo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  marca: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ano: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Carro.sync({ force: true }); // Sincroniza com o banco de dados

module.exports = Carro;