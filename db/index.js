const mongoose = require("mongoose");

const connectDb = (url) => {
  return mongoose.connect(url, { useNewUrlParser: true }, (err) => {
    console.log("mongoDB connected successfully");
  });
};

module.exports = connectDb;