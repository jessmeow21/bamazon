//using npm package mysql
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

//creating connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Catfood25",
    database: "bamazon"
});

//calling connection
connection.connect();

//function variable to manage connection query to mysql for the CLI table to display items nicely 
// connecting to database through a query to display items in table
var showItems = function(){
    connection.query("SELECT * FROM bamazon.products", function(err,res){
        if (err) throw err;
        //decorations
        console.log("-----------------------------");
        console.log("      Welcome To Bamazon    ");
        console.log("-----------------------------");
        console.log("See below for inventory");
        console.log("");
         //table from npm cli-table2
        var table = new Table({
            head: ["ID", "Product", "Price"],
            colWidths: [12, 50, 8],
            colAligns: ["center", "left", "right"],
        });
        //for loop is going to use the length of the result and push the product name and price
        for (let i = 0; i < res.length; i++) {
            table.push([res[i].item_id, res[i].product_name, res[i].price]);
        }
        //console log table to see it
            console.log(table.toString());   
            shop();
    }); //end connection to products
};

//using inquirer to prompt the user with questions
var shop = function(){
    inquirer.prompt({
        name: "productToBuy",
        type: "input",
        message: "Enter the ID of the product you'd like to buy."
    })
    .then(function(answer1){
    var selection = answer1.productToBuy;
    //use connection.query to connect query to database
    connection.query("SELECT * FROM products WHERE item_id", selection, function(err, res){
        if (err) throw err;
        //if user enters an id that does not exist
        if(res.length === 0){
        console.log("That product is not in inventory. Please enter a product Id from the list above.");
        //call it and it's in line 53 so it appears with table
        // shop();
        shop();
        } else {
        // console.log('Entry Success');
        //use inquirer to build quantity input
        inquirer.prompt({
            name: "quantity",
            type: "input",
            message: "How many items would you like to purchase?"
        })
        .then(function(answer2){
        var quantity = answer2.quantity;
        if (quantity > res[0].stock_quantity){
        console.log("Sorry, I only have " + res[0].stock_quantity + "  items of the product selected");
        shop();
        }else {
            console.log("");
            console.log(res[0].product_name + " purchased");
            console.log(quantity + " qty @ $" + res[0].price);
               //this variable will updated the stock quantity in the database
            var newQuantity = res[0].stock_quantity - quantity;
            connection.query(
                "UPDATE product SET stock_quantity = " + 
                newQuantity + " WHERE id = " +
                res[0].id, 
                function (err, resUpdate){
                    if (err) throw err;
                    console.log("");
                    console.log("Your Order has been processed");
                    console.log("Thank you for shopping with Bamazon!");
                    console.log("");
                    connection.end();
                }
            );
        }
        });
    };
    });
    });
};
//call it
showItems();