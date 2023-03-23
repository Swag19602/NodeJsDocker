const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        requried: [true, "Post must have a name"]
    },
    password:{
        type:String,
        requried: [true, "post must have  a body"]
    },

})

const User = new mongoose.model('User',userSchema);
module.exports=User