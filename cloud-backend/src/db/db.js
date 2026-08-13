const mongoose = require("mongoose");
const connectDB = 
async function connectDB(){
    await mongoose.connect('mongodb+srv://krishnarsharmanew_db_user:ELs6MN7Cm_Zt22F@my-first-cluster.1cnejrv.mongodb.net/project-1')
}