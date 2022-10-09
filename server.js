const express = require("express")
const fs = require("fs")
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

    const data=JSON.stringify({email:{"name":name,"password":pswd}})
    fs.writeFile("db.json",data, "utf8", (err)=>{
        if(err){
            console.log(err)
            res.status(500).send("SignUp error")
        }
        res.status(200).send("SignUp successful")
    })
})

app.post("/login",(req,res)=>{
    const {email,pswd}=req.body
    console.log(email,pswd)
    fs.readFile("db.json", "utf8", (err,jsondata)=>{
        if(err){
            console.log(err)
            res.status(500).send("Login error")
        }
        const data=JSON.parse(jsondata)
        console.log("data=",data)
        if(pswd===data.email.password)
            res.status(200).send("Login successful")
        else
            res.status(401).send("Login unsuccessful")
    })
})

app.delete("/delete",(req,res)=>{
    console.log(req.body)
    res.status(202).send("Deleted successfully")
})

app.listen(PORT,()=>{
    console.log("server is listening")
})
