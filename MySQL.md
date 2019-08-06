# MySQL

JavaScript File
---
Install npm packages
* install i mysql on command line (need node)

* read docs. Need some boiler plate text in order to use mysql. This unlocks all the abilites for mysql.

*First thing I want to do is to connect to a database:

const mysql = require ('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Catfood25'
    database: ('insert database you created' ex. 'ice_creamDB')
});

connection.connect(function(err){
    if (err) throw err;
    console.log('connected as id ' + connection.threadID)

    connection.query('SELECT * FROM products', function (err, res){
    if (err) throw err;
    });


});
//how to manipulate my data by using a query. Is going to take two arguments. The table and a call back function. 
//tell the table info

---
In the mysql workbench products table have:
SELECT * FROM icecreamDB.products; 











---
If error occurs on mysql connection or forgot password:
**IMPORTANT**: If you are using MySQL 8, you will need to have your class run the following query in the MySQL Workbench
```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourRootPassword'
```
Failure to do so will result in
```sh. Run this:
Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
```
---
