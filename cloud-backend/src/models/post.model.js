const mongoose = require("mongoose")

const postSchema = new mongoose.Scheme({
    image:String,
    caption:String
})

const postModel = mongoose.model("post",postSchema);