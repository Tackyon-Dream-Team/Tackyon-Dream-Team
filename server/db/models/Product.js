const Sequelize = require('sequelize')
const db = require('../db')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const axios = require('axios');

const SALT_ROUNDS = 5;

const Product = db.define('product', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://www.hammerheadshop.com/wp-content/uploads/2017/08/Product-ImageCOMING-SOON-2.png',
        validate: {
            isURL: true
        }
    },
    price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    category: {
        type: Sequelize.ENUM('Shoes', 'Electronics', 'Jackets', 'Sporting Equipment', 'Miscellaneous', 'None'),
        defaultValue: 'None'
    }
})

module.exports = Product
