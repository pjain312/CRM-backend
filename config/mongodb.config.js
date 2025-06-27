const mongoose = require("mongoose");
// const logger = require("../helpers/logger.helper");

let isConnected = false;

const connectDB = async (uri) => {
  if (isConnected) {
    logger.info("Using existing database connection");
    return;
  }

  try {
    const db = await mongoose.connect(uri, {autoIndex: true});

    isConnected = db.connections[0].readyState === 1;
    // logger.info("Database connection established");
    console.log("Database connection established");
  } catch (error) {
    // logger.error("Error connecting to the database:", error);
    console.log("Error connecting to the database:", error);
    throw new Error("Database connection failed");
  }
};

module.exports = connectDB;
