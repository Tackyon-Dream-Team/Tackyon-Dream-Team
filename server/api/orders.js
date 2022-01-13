const router = require('express').Router()
const { models: { Order }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
    try {
      const order = await Order.findAll();
      res.json(order)
    } catch (err) {
      next(err)
    }
  })

router.get('/:id', async(req, res, next) => {
    try {
        const singleOrder = await Order.findByPk(req.params.id);
        res.json(singleOrder)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        res.json(await Order.create(req.body))
    } catch(err) {
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const order = await Order.findByPk(req.params.id)
        if (order) {
            res.json(await order.update(req.body))    
        } else {
            res.sendStatus(404)
        }
    } catch(err) {
        next(err)
    }
})