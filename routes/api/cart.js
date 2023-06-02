const express = require("express");

const ctrl = require("../../controllers/cart-controllers");

const router = express.Router();

router.get("/", ctrl.getCart);

router.put("/:id", ctrl.addNewProduct);

router.put("/:id", ctrl.deleteProduct);

module.exports = router;
