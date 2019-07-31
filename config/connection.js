var mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();
var connection = mysql.createConnection({
  host: "localhost",
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: "burger_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id: " + connection.threadId);
});

module.exports = connection;
