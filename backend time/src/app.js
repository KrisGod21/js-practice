//server ko create karna
const express = require('express');
const app = express()
const noteModel = require("./db/models/note.model")
module.exports = app;
app.use(express.json());
app.post("/notes", async (req,res)=>{
    const data = req.body
    await noteModel.create({
        title:data.title,
        description:data.description 
    })
    res.status(201).json({
        message:"Node created successfully"
    })
})

app.get("/notes",async (req,res)=>{
    const notes = await noteModel.find()//gives an array
    res.status(200).json({
        message : "nodes fetched successfully",
        notes : notes
    })
})

app.delete("/notes/:id",async (req,res)=>{
    const id = req.params.id
    await noteModel.findOneAndDelete({
        _id : id
    })
    res.status(200).json({
        message:"Node deleted"
    })
})

app.patch("/notes/:id",async(req,res)=>{
    const id = req.params.id
    const description = req.body.description
    await noteModel.findOneAndUpdate({ _id : id}, {description : description})
    res.status(200).json({
        message:"Node updated"
    })
})