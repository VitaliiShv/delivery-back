const restaurants = require("../models/restaurants");

const getRestaurants = async (req, res, next) => {
  try {
    const result = await restaurants.getAll();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { getRestaurants };
