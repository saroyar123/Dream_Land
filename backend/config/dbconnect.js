const mongoose = require("mongoose");

exports.connection = () => {
  const url = "mongodb://localhost:27017/dream-land";
  mongoose.connect(url, () => {
    console.log("your databae connect successfully");
  });
};
