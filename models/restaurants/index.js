const fs = require("fs/promises");
const path = require("path");

const restaurantsPath = path.join(__dirname, "restaurants.json");

const getAll = async () => {
  const data = await fs.readFile(restaurantsPath);
  return JSON.parse(data);
};

module.exports = {
  getAll,
};
