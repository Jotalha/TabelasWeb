var express = require("express");
var router = express.Router();
const Musica = require("../models/musicas/MusicaModel"); // Importa o model - Setimo PASSO
const Carro = require("../models/carros/CarroModel"); // Importa o model - Setimo PASSO

/* GET home page. */
router.get("/", function (req, res, next) {
  // apagar depois
  if ( !global.livros) {
    global.livros = [];
  }

  // TO DO: Buscar as CARROS E LIVROS no banco de dados
  Musica.findAll().then((musicas) => {
    res.render("index", {
      title: "Carros",
      livros: global.livros,
      musicas: musicas,
    });
  });

  Carro.findAll().then((carros) => {
    res.render("index", {
      carros: carros
    });
  });
});

module.exports = router;
