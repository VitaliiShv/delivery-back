const cart = require("../models/order");
const { HttpError } = require("../helpers");

const getOrderList = async (req, res, next) => {
  try {
    const result = await order.getAll();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const addNewOrder = async (req, res, next) => {
  try {
    const result = await cart.addProductToCart(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { getOrderList, addNewOrder };
