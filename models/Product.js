const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    userId:{
        type: String,
        require: true
    },

},
{
    timestamps: true 
})

module.exports = mongoose.model("Product", ProductSchema);