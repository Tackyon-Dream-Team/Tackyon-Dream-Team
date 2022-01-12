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
  cartQuantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: {
        min: 1
    }
  }
});

module.exports = CartProduct;
