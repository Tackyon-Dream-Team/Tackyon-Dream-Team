const Sequelize = require("sequelize");
const db = require("../db");
const axios = require("axios");

const Order = db.define("Order", {
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