const userModel = require("../model/userSchema");

exports.createUser = async(req, res) => {
  try {
    const user =await  userModel.create({ ...req.body });

    res.status(200).json({
      success: true,
      user: user,
    });
  } catch (error) {
    res.status(400).json({
        success: false,
        user: "no",
      });
  }
};
