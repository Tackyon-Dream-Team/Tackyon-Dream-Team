//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Product = require("./models/Product");
const Order = require("./models/Order")
const OrderProduct = require('./models/OrderProduct')

//associations could go here!
//They should have a Many-Many relationship
//How to view the magic methods: console.log('Magic Methods: ', Object.getPrototypeOf(User))

User.hasMany(Order);
Order.belongsTo(User);

Order.belongsToMany(Product, {through: OrderProduct});
Product.belongsToMany(Order, {through: OrderProduct});


module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    OrderProduct
  },
};
