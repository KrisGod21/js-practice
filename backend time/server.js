
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


app.delete('/notes/:index',(req,res)=>{
    const index = req.params.index;
    delete notes[index];
    res.status(200).json({
        message:"note deleted successfully"
    })
}) 

app.patch('/notes/:index',(req,res)=>{
    const index = req.params.index;
    const content = req.body.content;
    notes[index].content = content
    res.status(200).json({
        message:"node uypdated successfully"
    })
});
app.listen(3000,() =>{
    console.log("Server is running");
});