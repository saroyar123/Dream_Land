const { json } = require('express');
const express=require('express')
const {connection}=require("./config/dbconnect");
const { createUser } = require('./controller/UserFunction');
const route=require("./routes/UserRoutes")
connection();

const app=express();
app.use(json());

app.use("/api",route);

app.listen(4000,()=>{
    console.log("server is running at port 4000")
})