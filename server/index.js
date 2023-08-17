const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const port = 5000
app.use(cors)
app.use(express.json())

mongoose.connect(
    "mongodb+srv://adnn4u:adnan1882@cluster0.axlobi4.mongodb.net/myntra?retryWrites=true&w=majority"
)



app.listen(port, ()=>{console.log(`myntra is flaying at ${port}`)})