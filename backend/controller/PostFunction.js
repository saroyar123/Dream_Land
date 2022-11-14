const userModel=require("../model/userSchema");
const postModel=require('../model/postSchema');

// create post for authorized user
exports.createPost=async(req,res)=>{
    try {
        const {caption,image}=req.body;

        if(!caption&&!image){
            return res.status(400).json({
                success:false,
                message:"all inputs are need"
            })
        }

        const post=await postModel.create({caption,image});
        req.user.posts.push(post);
        await req.user.save();
        res.status(200).json({
            success:true,
            message:"post created",
            post
        })

    } catch (error) {
        res.status(400).json({
            success:false,
            error:error.message
        })
    }
}