var fs = require('fs')
var faker = require('faker');

var database = { products: [] };
var categories = ['food', 'drinks']
var maxQty = 10
var minQty = 0

for (var i=1; i<=1000; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(100, 10000, 0) / 100,
    quantity:  Math.floor(Math.random() * (maxQty - minQty) + minQty),
    categories: categories[i % 2]
  });
}

fs.writeFile("./server/db.json", JSON.stringify(database), (err) => {
  console.log(err)
})
