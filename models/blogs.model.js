const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title:String,
    authour:[String],
    content : String,
    publishAt:Date
})

const model = mongoose.model("blogs",blogSchema);

module.exports=model;