// const router = require('express').Router()
// const { models: { Cart }} = require('../db')
// module.exports = router

// router.get('/', async (req, res, next) => {
//     try {
//       const cart = await Cart.findAll({
//           where: {
//               Sequelize.OP: {} }
//         });
//       res.json(products)
//     } catch (err) {
//       next(err)
//     }
//   })

// router.get('/:id', async(req, res, next) => {
//     try {
//         const singleproduct = await Product.findByPk(req.params.id);
//         res.json(singleproduct)
//     } catch (error) {
//         next(error)
//     }
// })