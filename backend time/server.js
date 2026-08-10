
const app = require("./src/app")

// app.get("/",(req,res) =>{
//     res.send("Hello world");
// });

// app.get("/about",(req,res)=>{
//     res.send("about page")
// });
const notes =[]
app.post('/notes',(req,res)=>{
    console.log(req.body)
})
app.listen(3000,() =>{
    console.log("Server is running");
});