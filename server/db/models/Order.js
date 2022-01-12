const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  quantity: {
      type: Sequelize.INTEGER,
      defaultValue: 0
  }
});

module.exports = Order;