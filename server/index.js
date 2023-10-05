const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cors = require("cors")
const userModel = require("./Models/Users")
const ProductModel = require("./Models/Products")
const port = 5000
app.use(cors())
app.use(express.json())

mongoose.connect(
    "mongodb+srv://pcseller4u:Pcseller4upassword@cluster.vpxpz2b.mongodb.net/cluster?retryWrites=true&w=majority"
    )

app.post("/register", async(req,res)=>{
    try {
        const {username,password} = req.body;
        console.log(req.body)
        const User =  await userModel.findOne({username})
      
        if(User){
           return res.status(400).json({message:"username is already in use"})
        }
        if(username.length < 6){
            return res.status(400).json({message:"Username must be 6 character long"})
        }
        if(password.length < 6){
            return res.status(400).json({message:"password must be alteast 6 characher long"})
        }
        const hashpassword = await bcrypt.hash(password, 10)
        const newUser = new userModel({username, password:hashpassword})
        await newUser.save()
        res.status(200).json({message:"user registered successfully"})
    } catch (error) {
        console.error(error.message);
    }
})

app.post("/login", async(req,res)=>{
    try {
        const {username,password} = req.body;
        const user = await userModel.findOne({username})
        if(!user){
            return res.status(404).json({message:"username does not exist"})
        }
        const passCompare = await bcrypt.compare(password, user.password)
        if(!passCompare){
            return res.status(401).json({message:"password is incorrect"})
        }
        const token = jwt.sign({id:user._id}, "myntradnan")
        res.status(200).json({message:"login succesful", token,  username:user.username})
    } catch (error) {
        console.error(error.message);
    }
})



app.post("/addproduct", async(req,res)=>{
try {
const {brand,title,description ,price,discountedPrice,image,
    imageTwo, gender,category,color} = req.body;
    const add = new ProductModel({
        brand,title,description ,price,discountedPrice,image,
        imageTwo, for: gender,category,color 
    })
    await add.save();
    res.status(201).json({ message: 'Product added successfully' });
} catch (error) {
console.error(error.message);
}
})




app.listen(port, ()=>{console.log(`myntra is flaying at ${port}`)})