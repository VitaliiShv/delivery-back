const express = require("express");

const ctrl = require("../../controllers/cart-controllers");

const router = express.Router();

router.get("/", ctrl.getCart);

router.post("/", ctrl.addNewProduct);

router.delete("/:id", ctrl.deleteProduct);

module.exports = router;
