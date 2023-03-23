const mongoose=require('mongoose')

const postSchema=new mongoose.Schema({
    title:{
        type:String,
        requried: [true, "Post must have a title"]
    },
    body:{
        type:String,
        requried: [true, "post must have  a body"]
    },

})

const Post = new mongoose.model('Post',postSchema);
module.exports=Post