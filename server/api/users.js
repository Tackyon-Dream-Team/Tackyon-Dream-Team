const router = require("express").Router();
const {
  models: { User, Order, Product, OrderProduct },
} = require("../db");
const { requireToken, isAdmin } = require("./gatekeeper");

router.get("/", async (req, res, next) => {
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

router.get("/:id/cartItems", async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        userId: req.params.id,
        activeOrder: "Incomplete",
      },
    });
    const orderProducts = await OrderProduct.findAll({
      where: {
        orderId: order.id,
      },
      include: Product,
    });
    res.json(orderProducts);
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

router.put("/:orderId/cart/:productId", async (req, res, next) => {
  try {
    // const order = await Order.findOne({
    //   where: {
    //     userId: req.params.id,
    //     activeOrder: 'Incomplete'
    //   },
    //   include: Product
    // })
    // const foundOrderId = order.dataValues.id

    const editCartItem = await OrderProduct.findOne({
      where: {
        orderId: req.params.orderId,
        productId: req.params.productId,
      },
    });

    res.json(await editCartItem.update(req.body));
  } catch (err) {
    next(err);
  }
});

router.delete(
  "/:orderId/cart/:productId/",

  async (req, res, next) => {
    try {
      // const order = await Order.findOne({
      //   where: {
      //     activeOrder: 'Incomplete',
      //     userId: req.params.id
      //   },
      //   include: Product
      // })
      // const foundOrderId = order.dataValues.id
      // console.log('<<<<order>>>>', order)

      const cartItem = await OrderProduct.findOne({
        where: {
          orderId: req.params.orderId,
          productId: req.params.productId,
        },
      });
      console.log("------cartIIIItem----", cartItem);
      await cartItem.destroy(); //if removed we make it to the action

      res.json(cartItem);
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

//For ACTUALLY changing the field for acive
router.put('/:userId/orders/:orderId', async (req, res, next) => {
  try {
    const editCartItem = await Order.findByPk(req.params.orderId)
    
    console.log('____________CART ITEM IN EDIT ________________', editCartItem)
    
    res.json(await editCartItem.update(req.body))
  } catch(err) {
    next(err)
  }
});

module.exports = router;