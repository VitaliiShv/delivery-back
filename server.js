const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://vitalii:qSuKcqLo6W3tF6cU@cluster0.xgy3gur.mongodb.net/delivery?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(3030))
  .catch((error) => console.log(error.message));

//qSuKcqLo6W3tF6cU
