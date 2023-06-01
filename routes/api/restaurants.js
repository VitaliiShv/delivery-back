const express = require("express");

const ctrl = require("../../controllers/restaurants-controllers");

const router = express.Router();

router.get("/", ctrl.getRestaurants);

module.exports = router;
