const mongoose=require('mongoose');

const Post= new mongoose.Schema({
    caption:{
        type:String,
        require:true
    },
    image:{
        type:String
    },
    like:[{
        type:mongoose.Types.ObjectId,
        ref:"user"
    }]
    
})

module.exports=mongoose.model('post',Post);