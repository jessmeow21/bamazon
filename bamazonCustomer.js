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

//connects to database
connection.connect(function(err){
    if (err) throw err;
    // console.log("connected as id " + connection.threadId);
    // start();
    
    //list the items to user
    connection.query('SELECT * FROM products', function(err, res){
    //error check
    if (err) throw err;
    console.log(res);
    });
});




// function start(){
//     inquirer.prompt([{
//         type: "list",
//         message: "What is the [ID] of the product you'd like to buy?",
//     }])
   
   
 


   


