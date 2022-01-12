const router = require('express').Router()
const { models: { User, Cart, Order, Product, CartProduct, OrderProduct }} = require('../db')

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

//edit cart
router.put('/:id/cart', async (req, res, next) => {
  try {
    const editCart = await Cart.findAll({
      where: {
        userId: req.params.id
      },
      include: Product
    })
    res.json(await editCart.update(req.body))
  } catch (err) {
    next(err)
  }
})

//WORKING - get single product info from specific user's cart
router.get('/:id/cart/:productId', async (req, res, next) => {
  try {
    const cart = await Cart.findAll({
      where: {
        userId: req.params.id
      }, 
      include: Product
    })
    const editCartItem = await CartProduct.findAll({
      where: {
        cartId: cart[0].id,
        productId: req.params.productId
      }
    })
    res.json(editCartItem)
  } catch(err) {
    next(err)
  }
})

router.put('/:id/cart/:productId', async (req, res, next) => {
  try {
    const cart = await Cart.findAll({
      where: {
        userId: req.params.id
      }, 
      include: Product
    })
    const editCartItem = await CartProduct.findAll({
      where: {
        cartId: cart[0].id,
        productId: req.params.productId
      }
    })
    res.json(await editCartItem.update(req.body))
  } catch(err) {
    next(err)
  }
})

router.delete('/:id/cart/:productId', async (req, res, next) => {
  try {
    const cart = await Cart.findAll({
      where: {
        userId: req.params.id
      }
    })
    const product = await Product.findByPk(req.params.productId)
    res.json(product.removeCart(cart))
  } catch(err) {
    next(err)
  }
})

//edit user
router.put('/:id', async (req, res, next) => {
  try {
    const editUser = await User.findByPk(req.params.id)
    res.json(await editUser.update(req.body))
  } catch(err) {
    next(err)
  }
})