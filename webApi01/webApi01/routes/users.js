const express = require("express");
const router = express.Router();
const db = require("../models/db");
const userSchema = require("../models/userSchema");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(db.findUsers());
});

router.get("/:id", (request, response) => {
  const id = request.params.id;
  response.json(db.findUser(id));
});

router.post("/", (request, response) => {
  const { error } = userSchema.validate(request.body);

  if (error) {
    return response.status(422).json({ error: error.details });
  }

  const user = db.insertUser(request.body);
  response.status(201).json(user);
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const user = db.updateUser(id, req.body, true);
  res.status(200).json(user);
});

router.patch("/id:", (request, response) => {
  const id = request.params.id;
  const user = db.updateUser(id, request.body, false);
  response.status(200).json(user);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const user = db.deleteUser(id);
  res.status(200).json(user);
});

module.exports = router;
