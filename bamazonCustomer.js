//using npm package mysql
var mysql = require("mysql");

//creating connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Catfood25",
    database: "bamazon"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.query


})