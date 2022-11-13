const {Router}=require("express");
const {auth}=require("../config/auth")
const { register, login, checkauth, logout } = require("../controller/UserFunction");

const route=Router();

route.post("/register",register);
route.get("/login",login);
route.get("/auth",auth,checkauth);
route.get("/logout",auth,logout)


module.exports=route;