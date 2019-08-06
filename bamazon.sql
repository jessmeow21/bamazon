DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(20) NOT NULL,
department_name VARCHAR(20) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INTEGER(20) NOT NULL,
PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Desks", "Office", 25.00, 10),
("Chairs", "Office", 50.00, 20),
("Pencils", "Office", 99.99, 10),
("Protein Powder", "Health", 25.99, 50),
("Barbies", "Toys", 30.00, 10),
("Hot Wheels", "Toys", 5.00, 10),
("Toilet Paper", "Bath", 9.99, 10),
("Candles", "Home", 7.99, 15),
("Coffee", "Food", 8.99, 100),
("Bedding", "Pets", 21.99, 50);

