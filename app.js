const express = require("express");
const cors = require("cors");
require("dotenv").config();

const productsRouter = require("./routes/api/products");
const restaurantsRouter = require("./routes/api/restaurants");
const cartRouter = require("./routes/api/cart");
const orderRouter = require("./routes/api/order");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productsRouter);
app.use("/api/restaurants", restaurantsRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;

// 1. GetallDIshes
// 2. getDishesByRestaurant

//1. GetAllRestaurants

//1. Get all cart
//2. add dish to cart
//3. delete dish from Cart
