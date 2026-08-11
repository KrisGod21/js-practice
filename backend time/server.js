
const express = require('express');
const app = require("./src/app")

// app.get("/",(req,res) =>{
//     res.send("Hello world");
// });

// app.get("/about",(req,res)=>{
//     res.send("about page")
// });
const notes =[]
app.use(express.json())
app.post('/notes',(req,res)=>{
    notes.push(req.body);
    res.status(201).json({
        message:"Note created successfully"
        
    })
})

app.get('/notes',(req,res)=>{
    res.status(200).json({
        message:"notes fecthed successfully",   
        notes : notes
    })
})
app.listen(3000,() =>{
    console.log("Server is running");
});