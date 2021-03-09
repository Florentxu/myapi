const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    price:{
        type: Number
    },
    title:{
        type: String,
        // required: true,
        lowercase: true,
    },
    description:{
        type: String,
        // required: true,
        lowercase : true
    },
    img:{
        type: String,
        // required: true,
        lowercase: true
    }
})

module.exports = mongoose.model('Product', productSchema);