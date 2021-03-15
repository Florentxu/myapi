const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
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
    price:{
        type: Number
    },
    category:{
        type: Schema.Types.ObjectId, 
        ref:'Category'
    },
    img:{
        type: String,
        // required: true,
        lowercase: true
    }
})

module.exports = mongoose.model('Product', productSchema);