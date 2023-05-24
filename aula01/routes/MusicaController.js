var express = require("express");
var router = express.Router();
const Musica = require("../models/musicas/MusicaModel"); // Importa o model de músicas - QUINTO PASSO

/* GET página de cadastro das músicas */
router.get("/", function (req, res, next) {
  res.render("cadastroMusica", {});
});

/* Posta os dados inseridos */
// router.post('/', function(req, res, next) {

//     global.musicas.push({nome: req.body.nome, artista: req.body.artista, album: req.body.album})
//     res.redirect('/');
//   });

// Posta os dados inseridos na tabela- SEXTO PASSO
router.post("/", function (req, res, next) {
  Musica.create({
    nome: req.body.nome,
    artista: req.body.artista,
    album: req.body.album,
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
});

module.exports = router;
