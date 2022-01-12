const Sequelize = require("sequelize");
const db = require("../db");

const CartProduct = db.define("cartProduct", {
  cartId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
        min: 0
    }
  }
});

module.exports = CartProduct;
