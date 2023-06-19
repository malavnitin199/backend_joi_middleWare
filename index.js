require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const DB_URI ="mongodb://127.0.0.1:27017";
mongoose
    .connect(DB_URI)
    .then(()=>{
        console.log("connected to DB at ",DB_URI);
    })
    .catch((err)=>{
        console.log(err);
    });
const {starter} = require("./Controller/currency");
const currencyRouter = require('./router/currency.route')
const userRouter =require("./router/user.route")
const {verifyPassword} = require("./middleWare/verifyAuth")

const app = express(); 
const PORT = 8082;

app.use(verifyPassword)

app.get("/",starter)
app.use("/currency",currencyRouter)
app.use("/user",userRouter)
 

app.listen(PORT,()=>{
    console.log("listening to the port 8082...")
})

