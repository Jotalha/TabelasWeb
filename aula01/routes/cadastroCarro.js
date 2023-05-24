var express = require('express');
var router = express.Router();

/* GET página de cadastro dos carros */
router.get('/', function(req, res, next) {
  res.render('cadastroCarro', { });
});

/* Posta os dados inseridos */
router.post('/', function(req, res, next) {
    global.carros.push({marca: req.body.marca, modelo: req.body.modelo, ano: req.body.ano})
    res.redirect('/');
  });

module.exports = router;
