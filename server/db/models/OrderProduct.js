const Sequelize = require("sequelize");
const db = require("../db");

const OrderProduct = db.define("orderProduct", {
  orderId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  orderQuantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: {
        min: 1
    }
  },
  orderPrice: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    },
    defaultValue: 0
  }
});

module.exports = OrderProduct;
