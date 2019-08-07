DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;
CREATE TABLE  products(
    id INT  AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price DECIMAL(11,2) NOT NULL,
    stock_quantity INT(10) NOT NULL,
    PRIMARY KEY (id)
);

SELECT * FROM products;

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("water bottle", "outdoor equipement", 10.50, 50),
("backpack","school supplies", 50.00, 20),
("computer","electoics",300.00,10),
("computer charger","electoics",20.00, 40),
("mobile phone", "electronics",500.00, 25),
("mobile charger","electronics",30.00, 60),
("mobile coverbox", "electronics",50.00, 40),
("coffee machine","kitchen equipement",100.00,20),
("tea bags","kitchen equipement",15.00, 30),
("coffee kettle", "kitchen equipement",25.00, 15)

