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
    inquirer.prompt([{
        type: "list",
        message: "What is the ID of the product you'd like to buy?",
        message: "How many units of this product would you like to buy?"
    }])
    console.log("connected as id " + connection.threadId);
    connection.query
    
    console.log('Insufficient quantity!')


})