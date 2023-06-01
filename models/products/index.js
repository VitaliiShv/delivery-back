const fs = require("fs/promises");
const path = require("path");

const productsPath = path.join(__dirname, "products.json");

const getAll = async () => {
  const data = await fs.readFile(productsPath);
  return JSON.parse(data);
};

const getByRestaurantId = async (id) => {
  const products = await getAll();
  console.log(products);
  const result = products.filter((product) => product.restaurantId === id);
  console.log(result);
  return result;
};

module.exports = {
  getAll,
  getByRestaurantId,
};
