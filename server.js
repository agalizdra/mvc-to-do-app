const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://lesscalie:<2019944zZ>@todoappcluster-vfvav.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log("test");
  
});