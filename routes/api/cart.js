const express = require("express");

const ctrl = require("../../controllers/cart-controllers");

const router = express.Router();

router.get("/", ctrl.getCart);

router.post("/:id", ctrl.addNewProduct);

router.delete("/:id", ctrl.deleteProduct);

module.exports = router;
