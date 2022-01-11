"use strict";

const {
  db,
  models: { User, Product, Cart },
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
      username: "cody",
      password: "123",
      firstName: "cody",
      lastName: "cuffy",
      email: "codycuffy@dreams.com",
    }),
    User.create({
      username: "murphy",
      password: "123",
      firstName: "murphy",
      lastName: "docs",
      email: "murphydocs@dreams.com",
    }),
    User.create({
      username: "beyonce",
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
      admin: true,
    }),
  ]);

  //creating Products
  const products = await Promise.all([
    Product.create({
      name: "Rain Jacket",
      description: "a jacket that gives you the power to stay dry",
      price: 49.99,
      quantity: 10,
    }),
    Product.create({
      name: "Snow Boots",
      description: "keeps the feet at exactly 70°F at all times",
      price: 119.99,
    }),
    Product.create({
      name: "Tent",
      description: "hide yourself from ET when out in the wild",
      price: 599.99,
      quantity: 5,
      category: "Sporting Equipment",
    }),
    Product.create({
      name: "Phone",
      description: "call mama bear with this amazing product",
      price: 999.99,
      quantity: 1,
      category: "Electronics",
    }),
    Product.create({
      name: "Rain Jacket",
      description: "a jacket that gives you the power to stay dry",
      price: 49.99,
      quantity: 10,
    }),
  ]);

  const cart = await Promise.all([Cart.create({}), Cart.create({})]);

  await cart[0].addProduct(products[0]);
  await cart[0].addProduct(products[1]);
  await cart[1].addProduct(products[3]);

  await cart[0].setUser(users[0]);
  await cart[1].setUser(users[1]);

  console.log(Object.getPrototypeOf(cart[0]));

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${products.length} products`);
  console.log(`seeded successfully`);
  // return {
  //   users: {
  //     cody: users[0],
  //     murphy: users[1],
  //   },
  // };
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
