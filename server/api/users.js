const router = require('express').Router()
const { models: { User, Cart, Order, Product }} = require('../db')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})


router.get('/:id', async (req, res, next) => {
  try {
    const singleUser = await User.findByPk(req.params.id, {
      attributes: ['id', 'username']
    })
    res.json(singleUser)
  } catch (err) {
    next(err)
  }
})

router.get('/:id/cart', async (req, res, next) => {
  try {
    const cart = await Cart.findAll({
      where: {
        userId: req.params.id
      },
      include: Product
    })
    res.json(cart)
  } catch (err) {
    next(err)
  }
})

router.get('/:id/order', async (req, res, next) => {
  try {
    const order = await Order.findAll({
      where: {
        userId: req.params.id
      }
    })
    res.json(order)
  } catch(err) {
    next(err)
  }
})

router.get('/:id/order/:orderId', async (req, res, next) => {
  try {
    const singleOrder = await Order.findAll({
      where: {
        userId: req.params.id,
        id: req.params.orderId
      },
      include: Product
    })
    res.json(singleOrder)
  } catch (err) {
    next(err)
  }
})