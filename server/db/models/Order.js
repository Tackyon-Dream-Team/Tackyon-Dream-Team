const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  /*
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  */
  activeOrder: {
    type: Sequelize.ENUM('Completed', 'Incomplete'),
    defaultValue: 'Incomplete'
  }
});

module.exports = Order;