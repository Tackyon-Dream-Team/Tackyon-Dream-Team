//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Product = require('./models/Product')

//associations could go here!
//They should have a Many-Many relationship
User.hasMany(Product, { through: 'UserProduct' });
Product.belongsToMany(User, { through: 'UserProduct' });

module.exports = {
  db,
  models: {
    User,
    Product,
  },
}
