var mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();
var connection = mysql.createConnection({
  host: "localhost",
  user: "webuser",
  password: "UCR",
  database: "burger_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id: " + connection.threadId);
});

module.exports = connection;
