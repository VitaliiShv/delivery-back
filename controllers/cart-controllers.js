const cart = require("../models/cart");
const { HttpError } = require("../helpers");

const getCart = async (req, res, next) => {
  try {
    const result = await cart.getAll();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const addNewProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const result = await cart.addProductToCart({ productId: id });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await cart.deleteById({ productId: id });
    if (!result) {
      throw HttpError(404, `Product with ${id} not found`);
    }
    res.json({
      message: "Delete success",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getCart, addNewProduct, deleteProduct };
