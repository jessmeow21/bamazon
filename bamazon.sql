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
VALUES ("Desks", "Office", 25, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chairs", "Office", 50, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pencils", "Office", 100, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Protein Powder", "Health", 25, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Barbies", "Toys", 30, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hot Wheels", "Toys", 25, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toilet Paper", "Bath", 25, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Candles", "Home", 12, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coffee", "Food", 10, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bedding", "Pets", 20, 50);

