const router = require('express').Router()
const { models: { Product }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
    try {
      const products = await Product.findAll();
      res.json(products)
    } catch (err) {
      next(err)
    }
  })

router.get('/:id', async(req, res, next) => {
    try {
        const singleproduct = await Product.findByPk(req.params.id);
        res.json(singleproduct)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        res.json(await Product.create(req.body))
    } catch(err) {
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const product = await Product.findByPk(req.params.id)
        if (product) {
            res.json(await product.update(req.body))    
        } else {
            res.sendStatus(404)
        }
    } catch(err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const product = await Product.findByPk(req.params.id)
        if (product) {
            res.json(await product.destroy())    
        } else {
            res.sendStatus(404)
        }
    } catch(err) {
        next(err)
    }
})