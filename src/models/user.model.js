const { number } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    lastName: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    tel:{
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: true,
    },
    address:{
        street :{
            type:String
        },
        ccode :{
            type:String
        },
        city : {
            type:String
        },
        country: {
            type:String
        }
    },
    orders:[{
        type: Schema.Types.ObjectId, 
        ref:'Order'
    }]
})

module.exports = mongoose.model('User', userSchema);
