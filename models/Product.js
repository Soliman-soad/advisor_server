const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    users:{
        type: Array,
        require: true,
        default: []
    },
    photo1: {
        type: String,
        require: true,  
    },
    photo2: {
        type: String,
        require: true,        
    },
    Description: {
        type: String,
        require:true,
        min: 200
    }

},
{
    timestamps: true 
})

module.exports = mongoose.model("Product", ProductSchema);