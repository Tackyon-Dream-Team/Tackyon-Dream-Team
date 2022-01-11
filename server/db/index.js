//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Product = require("./models/Product");
const Cart = require("./models/Cart");
const Order = require("./models/Order")

//associations could go here!
//They should have a Many-Many relationship
//How to view the magic methods: console.log('Magic Methods: ', Object.getPrototypeOf(User))

Cart.belongsTo(User);
User.hasOne(Cart);



Cart.belongsToMany(Product, { through: Order });
Product.belongsToMany(Cart, { through: Order }); //*******subject to change*******

module.exports = {
  db,
  models: {
    User,
    Product,
    Cart,
    Order
  },
};
