const router = require('express').Router()
const { models: { OrderProduct }} = require('../db')
module.exports = router

router.get('/:orderId/:productId', async(req, res, next) => {
    try {
        const orderProduct = await OrderProduct.findOne({
            where: {
                orderId: req.params.orderId,
                productId: req.params.productId
            }
        })
        res.json(orderProduct)
    } catch(err) {
        next(err)
    }
})

router.put('/:orderId/:productId', async(req, res, next) => {
    try {
        const [orderProduct, created] = await OrderProduct.findOrCreate({
            where: {
                orderId: req.params.orderId,
                productId: req.params.productId
            },
            defaults: {
                orderId: req.body.orderId,
                productId: req.body.productId,
                orderQuantity: req.body.orderQuantity,
                orderPrice: req.body.orderPrice
            }
        })
        if (created) {
            res.json(orderProduct)
        } else {
            res.json(await orderProduct.update({orderQuantity: orderProduct.orderQuantity + req.body.orderQuantity}))
        }
    } catch(err) {
        next(err)
    }
})