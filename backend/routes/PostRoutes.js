const { Router } = require("express");
const { auth } = require("../config/auth");
const { createPost, likePost } = require("../controller/PostFunction");

const route=Router();

route.post("/post",auth,createPost);
route.get('/like/:id',auth,likePost);

module.exports=route;