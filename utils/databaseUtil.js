const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;

const MONGO_URL =
  "mongodb+srv://shamanthgb0987:shamanthgb123@cluster0.aw6fkxn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


  let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
    .then((client) => {
      callback();
      _db = client.db('soliders');
    })
    .catch(err => {
      console.log("Error while connecting to mongo", err);
    });
};

const getDb = ()  => {
  if (!_db) {
    throw new Error("No database found");
  }
  return _db;
}

module.exports = mongoConnect;
module .getDb = getDb;
