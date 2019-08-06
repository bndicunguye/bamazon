var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "bamazon_db"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("this is connected")
  getProducts()
});
function getProducts() {
  connection.query("SELECT * FROM products", function (err, results) {
    if (err) throw err;
    console.table(results)
    whattheywant(results)
  })
}
function whattheywant(items) {
  inquirer
    .prompt([{
      type: "input",
      name: "choices",
      message: "please select the item ID you like"

    }]).then(function (value) {
      var choiceID = parseInt(value.choices)
      var products = quantity(choiceID, items)
      if (products) {

        askQuantity(products)

      }
      else {
        console.log("\nThat item is not available")
        getProducts()
      }
    })
}
function askQuantity(item) {
  inquirer
    .prompt([{
      type: "input",
      name: "howMany",
      message: "how many would you like?"

    }])
    .then(function (value) {
      var quantity = parseInt(value.howMany)
      if (quantity > item.stock_quantity) {
        console.log("\Insufficient quantity!")
        getProducts()
      }
      else {
        buyItems(item, quantity);
      }

    })
}
function buyItems(item, quantity) {
  console.log(item, quantity)
 
  connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: item.stock_quantity
      },
      {
        id: quantity.id
      }
      
    ],
    function (error) {
      if (error) throw err;
      console.log("oder placed successful");
     
    }
  );
  getProducts();

}
function quantity(choiceID, inventory) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id === choiceID) {
      return inventory[i]
    }

  }
  return false
}

