const router = require("express").Router();
const { requireToken, isAdmin } = require("./gatekeeper");

const {
  models: { Product },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const singleproduct = await Product.findByPk(req.params.id);
    res.json(singleproduct);
  } catch (error) {
    next(error);
  }
});

router.post("/", requireToken, isAdmin, async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", requireToken, isAdmin, async (req, res, next) => {
  try {
    console.log("before running api route");
    const product = await Product.findByPk(req.params.id);
    console.log("inside api route /products/id", product);
    if (product) {
      res.json(await product.update(req.body));
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

router.put("/decrement/:id", async (req, res, next) => {
  try {
    const edit = await Product.findByPk(req.params.id);
    res.json(
      await edit.update({ quantity: edit.quantity - req.body.decrement })
    );
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", requireToken, isAdmin, async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      res.json(await product.destroy());
      res.send(product);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
