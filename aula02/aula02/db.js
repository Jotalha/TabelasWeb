const ObjectId = require("mongodb").ObjectId;

/*const mongoClient = require("mongodb").MongoClient;

function connectDB() {
  if (!global.connection)
    mongoClient
      .connect(process.env.MONGODB_CONNECTION, { useUnifiedTopology: true })
      .then((connection) => {
        global.connection = connection.db("aula02");
        console.log("Connected to MongoDB!");
      })
      .catch((error) => {
        console.log(error);
        global.connection = null;
      });
}*/

async function connectDB() {
  const { MongoClient } = require("mongodb");

  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();
  global.connection = client.db("aula02");
  console.log("Connected to MongoDB!");
}

connectDB();

function findCustomers() {
  console.log("Entrou na findCustomers");
  return global.connection.collection("clientes").find({}).toArray();
}

function insertCustomer(customer) {
  return global.connection.collection("clientes").insertOne(customer);
}

function updateCustomer(id, customer) {
  const objectId = new ObjectId(id);
  return global.connection
    .collection("clientes")
    .updateOne({ _id: objectId }, { $set: customer });
}

function deleteCustomer(id) {
  const objectId = new ObjectId(id);
  return global.connection.collection("clientes").deleteOne({ _id: objectId });
}

function findCustomer(id) {
  const objectId = new ObjectId(id);
  return global.connection.collection("clientes").findOne({ _id: objectId });
}

module.exports = {
  findCustomers,
  insertCustomer,
  updateCustomer,
  deleteCustomer,
  findCustomer,
};
