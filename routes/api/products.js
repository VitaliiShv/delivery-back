const express = require("express");

const ctrl = require("../../controllers/products-controller");

const router = express.Router();

router.get("/", ctrl.getProducts);

router.get("/:restaurantId", ctrl.getByRestaurants);

module.exports = router;
