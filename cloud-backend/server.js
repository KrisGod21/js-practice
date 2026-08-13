const app = require('./src/app');
const connectDB = require('./src/db/db')
app.listen(3000,(req,res)=>{
    console.log("server running")
})