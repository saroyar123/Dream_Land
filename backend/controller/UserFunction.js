const userModel = require("../model/userSchema");
const jwt=require('jsonwebtoken')

// register function
exports.register = async(req, res) => {
  try {

    if(!req.body.email&&!req.body.name&&!req.body.password)
    {
      return res.status(400).json({
        success:false,
        message:"all input are needed"
      })
    }

    const userExist=await userModel.findOne({email:req.body.email})
    
    if(userExist)
    {
     return  res.status(400).json({
        success:false,
        message:"user already exist"
      })
    }

    const user =await  userModel.create({ ...req.body });

    const token=jwt.sign({ "email":req.body.email},process.env.JWT_SECRATE_KEY);

    // console.log(token);

    res.cookie('token',token,{ maxAge: 900000, httpOnly: true }).status(200).json({
      success: true,
      user: user,
    });
  } catch (error) {
    res.status(400).json({
        success: false,
        error:error.message
      });
  }
};

// login function
exports.login = async(req, res) => {
  try {

    if(!req.body.email&&!req.body.password)
    {
      return res.status(400).json({
        success:false,
        message:"all input are needed"
      })
    }

    const user=await userModel.findOne({email:req.body.email});
    if(!user)
    {
      return res.status(400).json({
        success:false,
        message:"register first"
      })
    }

    const token=jwt.sign({ "email":req.body.email},process.env.JWT_SECRATE_KEY);

    // console.log(token);

    res.cookie('token',token,{ maxAge: 900000, httpOnly: true }).status(200).json({
      success: true,
      user: user,
    });
  } catch (error) {
    res.status(400).json({
        success: false,
        error:error.message
      });
  }
};

// check auth

exports.checkauth=(req,res)=>{

  try {
    
    res.status(200).json({
      success:true,
      user:req.user
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error:error.message
    });
  }
}


// logout user

exports.logout=(req,res)=>{
try {
  res.status(200).cookie("token",null,{maxAge:0}).json({
    success:true,
    message:"you are successfully logout"
  })
} catch (error) {
  res.status(400).json({
    success: false,
    error:error.message
  });
}
}
