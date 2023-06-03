const fs = require("fs/promises");
const path = require("path");
const nanoid = require("nanoid");

const orderPath = path.join(__dirname, "order.json");

const getAll = async () => {
  const data = await fs.readFile(orderPath);
  return JSON.parse(data);
};

const addOrderToList = async (order) => {
  const order = await getAll();
  const newOrder = {
    id: nanoid(),
    ...order,
  };

  order.push(newOrder);
  await fs.writeFile(orderPath, JSON.stringify(order, null, 2));
  return newOrder;
};

module.exports = {
  getAll,
  addOrderToList,
};
