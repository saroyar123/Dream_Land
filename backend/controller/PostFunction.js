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

// for like the by autharazied user

exports.likePost=async(req,res)=>{
    try {

        const post=await postModel.findOne({_id:req.params.id});
        if(!post)
        {
            return res.status(400).json({
                success:false,
                message:"post not exist"
            })
        }

        let index=-1;
        index=post.like.indexOf(req.user._id);
        if(index!=-1)
        {
            post.like.splice(index,1);
           await post.save();
            return res.status(200).json({
                success:true,
                message:"unlike the post"
            })
        }

        post.like.push(req.user._id);
        await post.save()

        res.status(200).json({
            success:true,
            message:"like the post"
        })


    } catch (error) {
        res.status(400).json({
            success:false,
            error:error.message
        })
    }
}