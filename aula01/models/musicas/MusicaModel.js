const Sequelize = require("sequelize");
const connection = require("../../database/database");

// criando objeto/tabela musica no banco de dados - QUARTO PASSO
const Musica = connection.define("musicas", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  artista: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  album: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Musica.sync({ force: true }); // Sincroniza com o banco de dados

module.exports = Musica;
