const router = require("express").Router();
const {
  models: { User, Order, Product, OrderProduct },
} = require("../db");
const { requireToken, isAdmin } = require("./gatekeeper");

module.exports = router;

router.get("/", requireToken, isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "username"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});
router.get("/all", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const singleUser = await User.findByPk(req.params.id, {
      attributes: ["id", "username"],
    });
    res.json(singleUser);
  } catch (err) {
    next(err);
  }
});

router.get("/:id/cart", async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        userId: req.params.id,
        activeOrder: "Incomplete",
      },
      include: Product,
    });
    res.json(order);
  } catch (err) {
    next(err);
  }
});

router.get("/:id/orders", async (req, res, next) => {
  try {
    const order = await Order.findAll({
      where: {
        userId: req.params.id,
        activeOrder: "Completed",
      },
      include: Product,
    });
    res.json(order);
  } catch (err) {
    next(err);
  }
});

router.get("/:id/orders/:orderId", async (req, res, next) => {
  try {
    const singleOrder = await Order.findAll({
      where: {
        userId: req.params.id,
        id: req.params.orderId,
      },
      include: Product,
    });
    res.json(singleOrder);
  } catch (err) {
    next(err);
  }
});

//edit cart - when we say we're editing a cart, we're really only changing the order status
router.put("/:id/cart", async (req, res, next) => {
  try {
    const editOrder = await Order.findAll({
      where: {
        userId: req.params.id,
        activeOrder: "Incomplete",
      },
    });
    res.json(await editOrder.update(req.body));
  } catch (err) {
    next(err);
  }
});

router.post("/:id/cart", async (req, res, next) => {
  try {
    res.json(await OrderProduct.create(req.body));
  } catch (err) {
    next(err);
  }
});
///////////////////////////////////////////////////////////////////////

//Changing activeOrder field from 'Incomplete' to 'Completed'
router.put("/:id/cart", async (req, res, next) => {
  try {
    const checkoutOrder = await Order.findAll({
      where: {
        userId: req.params.id,
        activeOrder: "Incomplete",
      },
    });
    res.json(await checkoutOrder.update({ activeOrder: "Completed" }));
  } catch (err) {
    next(err);
  }
});

router.put("/:id/cart/:productId", async (req, res, next) => {
  try {
    const cart = await Order.findAll({
      where: {
        userId: req.params.id,
        activeOrder: "Incomplete",
      },
      include: Product,
    });
    const editCartItem = await CartProduct.findAll({
      where: {
        cartId: cart[0].id,
        productId: req.params.productId,
      },
    });
    res.json(await editCartItem.update(req.body));
  } catch (err) {
    next(err);
  }
});

router.delete(
  "/:id/cart/:productId/:orderProductId",
  async (req, res, next) => {
    try {
      // const order = await Order.findAll({
      //   where: {
      //     activeOrder: 'Incomplete',
      //     userId: req.params.id
      //   }
      // })
      // console.log('delete route in api--------', order.order.dataValues.id)

      const cartItem = await OrderProduct.findAll({
        where: {
          orderId: req.params.orderProductId,
          productId: req.params.productId,
        },
      });
      // console.log("------cartIIIItem----", cartItem);
      // const product = cart[0].products[req.params.index] //await Product.findByPk(req.params.productId)
      // await cart.removeOrderProduct(product.id) //if removed we make it to the action
      res.json(order);
    } catch (err) {
      next(err);
    }
  }
);

//edit user
router.put("/:id", async (req, res, next) => {
  try {
    const editUser = await User.findByPk(req.params.id);
    res.json(await editUser.update(req.body));
  } catch (err) {
    next(err);
  }
});
