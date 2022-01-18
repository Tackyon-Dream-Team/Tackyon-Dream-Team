"use strict";

const {
  db,
  models: { User, Product, Order, OrderProduct },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({
      username: "Cody",
      password: "123",
      firstName: "cody",
      lastName: "cuffy",
      email: "codycuffy@dreams.com",
    }),
    User.create({
      username: "Murphy",
      password: "123",
      firstName: "murphy",
      lastName: "docs",
      email: "murphydocs@dreams.com",
    }),
    User.create({
      username: "Beyonce",
      password: "123",
      firstName: "beyonce",
      lastName: "knowles",
      email: "beyonceknowles@dreams.com",
    }),
    User.create({
      username: "2pac",
      password: "123",
      firstName: "2pac",
      lastName: "shakur",
      email: "makaveli@dreams.com",
    }),
    User.create({
      username: "Mac",
      password: "123",
      firstName: "Mac",
      lastName: "Attack",
      email: "macaroni@cheese.com",
      admin: true,
    })
  ]);
    
  const completedOrders = await Promise.all([
    Order.create({activeOrder: 'Completed'}),
    Order.create({activeOrder: 'Completed'}),
    Order.create({activeOrder: 'Completed'}),
    Order.create({activeOrder: 'Completed'}),])  
  //creating Products
  
  const incompleteOrder = await Promise.all([
    Order.create({activeOrder: 'Incomplete'}),
    ])
  
  const products = await Promise.all([
    Product.create({
      name: "Rain Jacket",
      description: "a jacket that gives you the power to stay dry",
      price: 4999,
      quantity: 10,
    }),
    Product.create({
      name: "Snow Boots",
      description: "keeps the feet at exactly 70°F at all times",
      price: 11999,
    }),
    Product.create({
      name: "Tent",
      description: "hide yourself from ET when out in the wild",
      price: 59999,
      quantity: 5,
      category: "Sporting Equipment",
    }),
    Product.create({
      name: "Phone",
      description: "call mama bear with this amazing product",
      price: 99999,
      quantity: 1,
      category: "Electronics",
    }),
    Product.create({
      name: "Sun Hoodie",
      description: "a hoodie that keeps you pale",
      price: 1529,
      quantity: 20,
    }),
  ]);

  //user 1 has previous orders 1, 2
  await completedOrders[0].setUser(users[0])
  await completedOrders[1].setUser(users[0])
  await incompleteOrder[0].setUser(users[0])
  
  //previous order 1 has products 3, 4
  await incompleteOrder[0].addProduct(products[2])
  await incompleteOrder[0].addProduct(products[3])
  
  //previous order 2 has product 5
  await completedOrders[0].addProduct(products[4])
  await completedOrders[1].addProduct(products[2])
  await completedOrders[1].addProduct(products[1])
  
  /*
  const objectToUpdate = await OrderProduct.findAll({
    where: {
      orderId: 1,
      productId: 5
    }
  })
  objectToUpdate.set({orderId: 1, productId: 5, orderQuantity: 1, orderPrice: 4999})
  await objectToUpdate.save()
  

  await OrderProduct.create({
    orderId: 1, productId: 3, orderQuantity: 1, orderPrice: 4999
  })
  */
  //console.log(Object.getPrototypeOf(OrderProduct));
  //console.log(Object.getPrototypeOf(users[0]));
  //console.log(Object.getPrototypeOf(products[0]));
  //console.log(Object.getPrototypeOf(orders[0]));
  
  
  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${products.length} products`);
  console.log(`seeded successfully`);
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
