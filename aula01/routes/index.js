var express = require("express");
var router = express.Router();
const Musica = require("../models/musicas/MusicaModel"); // Importa o model - Setimo PASSO

/* GET home page. */
router.get("/", function (req, res, next) {
  // apagar depois
  if (!global.carros || !global.livros) {
    global.carros = [];
    global.livros = [];
  }

  // TODO: Buscar as CARROS E LIVROS no banco de dados
  Musica.findAll().then((musicas) => {
    res.render("index", {
      title: "Carros",
      carros: global.carros,
      livros: global.livros,
      musicas: musicas,
    });
  });
});

module.exports = router;
