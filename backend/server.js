const express=require('express')
const {connection}=require("./config/dbconnect")

const app=express();
connection();
app.get("/",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"get route work fine"
    })
})
app.listen(4000,()=>{
    console.log("server is running at port 4000")
})