const {Router}=require("express");
const {auth}=require("../config/auth");
const { createPost } = require("../controller/PostFunction");
const { register, login, checkauth, logout } = require("../controller/UserFunction");

const route=Router();

route.post("/register",register);
route.get("/login",login);
route.get("/auth",auth,checkauth);
route.get("/logout",auth,logout);
route.post("/post",auth,createPost);


module.exports=route;