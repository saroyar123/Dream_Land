const {Router}=require("express");
const { createUser } = require("../controller/UserFunction");

const route=Router();

route.get("/register",createUser);

module.exports=route;