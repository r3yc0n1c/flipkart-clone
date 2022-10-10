const express = require("express")
require('dotenv').config()
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
require("./db")
const User = require("./models/userSchema")

app.get("/test", (req, res) => {
    res.status(200).send("Server is working")
})

app.post("/signup", async (req, res) => {
    const { name, email, pswd } = req.body
    console.log(name, email, pswd)
    const existingUser = await User.findOne({ email: email })
    if(existingUser)
        res.status(409).send("Account already exists")
    else{
        const newUser = new User({ name, email, pswd })
        await newUser.save()
        res.status(200).send("Signup Successful")
    }
})

app.post("/login", async (req, res) => {
    const { email, pswd } = req.body
    console.log(email, pswd)
    const existingUser = await User.findOne({
        email: email
    })
    if (existingUser) {
        if (existingUser.pswd === pswd) {
            console.log(existingUser.name + " logged in")
            res.status(200).send("Login successful")
        }
        else
            res.status(401).send("Wrong password. Login unsuccessful")
    }
    else
        res.status(403).send("Account does not exist. SigUp first")
})

app.delete("/delete", async (req, res) => {
    console.log(req.body)

    const { email } = req.body
    const existingUser = await User.findOne({
        email: email
    })
    if (!existingUser) {
        res.status(400).send('User not found')
    } else {
        await existingUser.remove()
        res.status(200).send("User deleted successfully")
    }
})

app.listen(PORT, () => {
    console.log("server is listening")
})