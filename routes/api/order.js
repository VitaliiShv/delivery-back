const express = require("express");

const ctrl = require("../../controllers/order-controllers");

const router = express.Router();

router.get("/", ctrl.getOrderList);

router.post("/", ctrl.addNewOrder);

module.exports = router;
