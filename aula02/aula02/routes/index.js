var express = require("express");
var router = express.Router();
const db = require("../db");

/* GET home page. */
router.get("/", function (req, res, next) {
  db.findCustomers()
    .then((customers) => {
      res.render("index", { title: "Express", customers });
    })
    .catch((error) => {
      console.log(error);
      res.render("error", {
        message: "Não foi possível listar os clientes",
        error,
      });
    });
});

router.get("/new", (request, response) => {
  response.render("customer", { title: "Cadastro de clientes", customer: {} });
});

router.get("/edit/:customerId", (request, response) => {
  const id = request.params.customerId;
  db.findCustomer(id)
    .then((customer) =>
      response.render("customer", { title: "Edição de cadastro", customer })
    )
    .catch((error) => {
      console.log(error);
      res.render("error", {
        message: "Não foi possível atualizar os dados dos clientes",
        error,
      });
    });
});

router.get("/delete/:customerId", (request, response) => {
  const id = request.params.customerId;
  db.deleteCustomer(id)
    .then((result) => response.redirect("/"))
    .catch((error) => {
      console.log(error);
      res.render("error", {
        message: "Não foi possível deletar este cliente",
        error,
      });
    });
});

router.post("/new", (request, response) => {
  if (!request.body.nome)
    return response.redirect("/new?error=0 campo nome é obrigatório");

  if (request.body.idade && !/[0-9]+/.test(request.body.idade))
    return response.redirect("/new?error=0 campo idade é numérico");

  const id = request.body.id;
  const nome = request.body.nome;
  const idade = parseInt(request.body.idade);
  const cidade = request.body.cidade;
  const uf = request.body.uf > 2 ? "" : request.body.uf;

  const customer = { nome, idade, cidade, uf };
  const promise = id
    ? db.updateCustomer(id, customer)
    : db.insertCustomer(customer);

  promise
    .then((result) => {
      response.redirect("/");
    })
    .catch((error) => {
      console.log(error);
      res.render("error", {
        message: "Não foi possível salvar o cliente",
        error,
      });
    });
});

module.exports = router;
