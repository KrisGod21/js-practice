const express = require('express')
const multer = require('multer');
const uploadFile = require('./services/storage.service')
const postModel = require('./models/post.model')
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors())
const upload = multer({storage : multer.memoryStorage()})
app.post('/create-post',upload.single("image"),async (req,res)=>{
    console.log(req.body);
    console.log(req.file);
    result = await uploadFile(req.file.buffer)
    const post = await postModel.create({
        image:result.url,
        caption:req.body.caption
    })
    res.status(201).json({
        message:"post created successfully",
        post
    })
})

app.get("/posts",async (req,res) =>{
    const posts = await postModel.find()
    return res.status(200).json({
        message:"posts fetched succesfully",
        posts
    })
})

module.exports = app