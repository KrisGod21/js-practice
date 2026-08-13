const mongoose = require("mongoose");
require('dotenv').config(); // Loads the variables

async function connectDB(){
    await mongoose.connect(process.env.MONGO_URI); // Safe and hidden!
    console.log("MongoDB Connected Successfully!");
}

module.exports = connectDB;
