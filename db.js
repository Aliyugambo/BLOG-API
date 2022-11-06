const mongoose = require("mongoose")
const Schema = mongoose.Schema;
require("dotenv").config();

const MONGODB_CONNECTING_URL = process.env.MONGODB_CONNECTING_URL;

const connectToMongoDB = () => {
  mongoose.connect(MONGODB_CONNECTING_URL);

  mongoose.connection.on("connected", () => {
    console.log("Successfully Connected to MongoDB");
  });

  mongoose.connection.on("error", (err) => {
    console.log("Error Connecting to MongoDB", err);
  });
};


module.exports = connectToMongoDB;