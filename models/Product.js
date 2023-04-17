const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    users:{
        type: Array,
        default: []
    },
    productType:{
        type: String,
        require: true
    },
    photo1: {
        type: String,
        require: true,  
    },
    photo2: {
        type: String,
        require: true,        
    },
    description: {
        type: String,
        require:true,
        min: 200
    },
    comments:{
        type: Array,
        default:[]
    }
},
{
    timestamps: true 
})

module.exports = mongoose.model("Product", ProductSchema);