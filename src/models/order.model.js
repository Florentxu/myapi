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
    }

})
module.exports = mongoose.model('Order', orderSchema);