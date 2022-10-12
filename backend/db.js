const mongoose = require("mongoose")
const URI = process.env.DBURI
mongoose.connect(URI)
.then(()=>{
    console.log("Database connected")
}) 
.catch((e)=>{
    console.log(e)
})
