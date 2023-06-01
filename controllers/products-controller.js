const products = require("../models/products");
const { HttpError } = require("../helpers");

const getProducts = async (req, res, next) => {
  try {
    const result = await products.getAll();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getByRestaurants = async (req, res, next) => {
  try {
    const { restaurantId } = req.params;
    const result = await products.getByRestaurantId(restaurantId);
    if (!result) {
      throw HttpError(404, `Restaurant with ${restaurantId} not found`);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { getProducts, getByRestaurants };
