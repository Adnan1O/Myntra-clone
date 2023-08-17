const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    brand:{type: String, required: true  },
    title:{type: String, required: true },
    description:{type: String, required: true },
    price:{type: String, required: true },
    discountedPrice:{type: String, required: true },
    image: {type: File, required: true },
    imageTwo: {type: File, required: true },
    for: {type: String, required: true },
    category:{type: String, required: true },
    color:{type: String, required: true },
})