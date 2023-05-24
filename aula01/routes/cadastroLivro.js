var express = require("express");
var router = express.Router();

/* GET página de cadastro dos carros */
router.get("/", function (req, res, next) {
  res.render("cadastroLivro", {});
});

/* Posta os dados inseridos */
router.post("/", function (req, res, next) {
  console.log(req.body);
  global.livros.push({
    nome: req.body.nome,
    autor: req.body.autor,
    ano: req.body.ano,
  });
  res.redirect("/");
});

module.exports = router;
