var express = require("express");
var router = express.Router();
const Carro = require("../models/carros/CarroModel"); // Importa o model de CARROS - QUINTO PASSO

/* GET página de cadastro das músicas */
router.get("/", function (req, res, next) {
  res.render("cadastroCarro", {});
});

/* Posta os dados inseridos */
// router.post('/', function(req, res, next) {

//     global.musicas.push({nome: req.body.nome, artista: req.body.artista, album: req.body.album})
//     res.redirect('/');
//   });

// Posta os dados inseridos na tabela- SEXTO PASSO
router.post("/", function (req, res, next) {
  Carro.create({
    modelo: req.body.modelo,
    marca: req.body.marca,
    ano: req.body.ano,
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
