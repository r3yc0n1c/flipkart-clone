const express = require("express")
require('dotenv').config()
const PORT = process.env.PORT || 5000

const app=express()
app.use(express.json())

app.get("/test",(req,res)=>{
    res.status(200).send("Server is working")
})

app.post("/signup",(req,res)=>{
    const {name,email,pswd}=req.body
    console.log(name,email,pswd)
    res.status(200).send("SignUp successful")
})

app.listen(PORT,()=>{
    console.log("server is listening")
})