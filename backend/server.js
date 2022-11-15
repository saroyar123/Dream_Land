const { json } = require('express');
const express=require('express');
const {connection}=require("./config/dbconnect");
const userRoute=require("./routes/UserRoutes");
const postRoute=require("./routes/PostRoutes");
const dotenv=require("dotenv");
const cookieparser=require("cookie-parser");

connection();
dotenv.config();

const app=express();
app.use(json());
app.use(cookieparser());
app.use("/api",userRoute);
app.use("/api",postRoute);

app.listen(process.env.PORT,()=>{
    console.log("server is running at port 4000")
})