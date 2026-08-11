const mongoose = require('mongoose');

async function connectDB(){
    await mongoose.connect("mongodb+srv://krishnarsharmanew_db_user:ELs6MN7Cm_Zt22F@my-first-cluster.1cnejrv.mongodb.net/sneha")
    console.log("Connected to DB")  
}

module.exports = connectDB