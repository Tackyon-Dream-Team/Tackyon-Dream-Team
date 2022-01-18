const router = require('express').Router()
const { models: { User, Order, Product, OrderProduct }} = require('../db')

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
    const order = await Order.findOne({
      where: {
        userId: req.params.id,
        activeOrder: 'Incomplete'
      },
      include: Product
    })
    console.log('------', order.dataValues.products)
    res.json(order)
  } catch (err) {
    next(err)
  }
})

router.get('/:id/orders', async (req, res, next) => {
  try {
    const order = await Order.findAll({
      where: {
        userId: req.params.id,
        activeOrder: 'Completed'
      },
      include: Product
    })
    res.json(order)
  } catch(err) {
    next(err)
  }
})

router.get('/:id/orders/:orderId', async (req, res, next) => {
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

//edit cart - when we say we're editing a cart, we're really only changing the order status
router.put('/:id/cart', async (req, res, next) => {
  try {
    const editOrder = await Order.findAll({
      where: {
        userId: req.params.id,
        activeOrder: 'Incomplete'
      }
    })
    res.json(await editOrder.update(req.body))
  } catch (err) {
    next(err)
  }
})

router.post('/:id/cart', async (req, res, next) => {
  try {
    res.json(await OrderProduct.create(req.body))
  } catch(err) {
    next(err)
  }
})
///////////////////////////////////////////////////////////////////////

//Changing activeOrder field from 'Incomplete' to 'Completed'
router.put('/:id/cart', async (req, res, next) => {
  try {
    const checkoutOrder = await Order.findAll({
      where: {
        userId:req.params.id,
        activeOrder: 'Incomplete'
      }
    })
    res.json(await checkoutOrder.update({activeOrder: 'Completed'}))
  } catch(err) {
    next(err)
  }
})


router.put('/:id/cart/:productId', async (req, res, next) => {
  try {
    const cart = await Order.findAll({
      where: {
        userId: req.params.id,
        activeOrder: 'Incomplete'
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

router.delete('/:id/cart/:productId/', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        activeOrder: 'Incomplete',
        userId: req.params.id
      },
      include: Product
    })

    const foundOrderId = order.dataValues.id
    console.log('<<<<order>>>>', order)
    const cartItem = await OrderProduct.findOne({
      where: {
        orderId: foundOrderId,
        productId: req.params.productId
      },
    })
    console.log('------cartIIIItem----', cartItem)
    await cartItem.destroy()//if removed we make it to the action

    res.json(cartItem)
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
