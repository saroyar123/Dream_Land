const jwt=require("jsonwebtoken");
const userModel=require("../model/userSchema")

exports.auth=async(req,res,next)=>{
    try {
        
        const {token}=req.cookies;
        if(!token){
           return  res.status(400).json({
                success:false,
                message:"login first"
            })
        }

        const {email}= jwt.verify(token,process.env.JWT_SECRATE_KEY='SAROYARHOSSAIN');
        const user=await userModel.findOne({email:email});
        if(!user){
            return res.status(400).json({
                success:false,
                message:"login first"
            })
        }
        req.user=user;
        // res.status(200).json({
        //     success:true,
        //     message:"you are login"
        // })
        next();

    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}