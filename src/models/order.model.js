const { string } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    total:{
        type: Number
    },
    products:[{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }],
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    status:{
        type: String,
        default: "En cours"
    }

})
module.exports = mongoose.model('Order', orderSchema);