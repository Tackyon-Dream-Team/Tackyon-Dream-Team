const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://www.hammerheadshop.com/wp-content/uploads/2017/08/Product-ImageCOMING-SOON-2.png",
    validate: {
      isURL: true,
    },
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    },
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0
    }
  },
  category: {
    type: Sequelize.ENUM(
      "men",
      "women",
      "kids",
      "camp hike",
      "accessories",
      "resources",
      "none"
    ),
    defaultValue: "none",
  },
});

module.exports = Product;
