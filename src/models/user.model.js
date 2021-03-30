const { number } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    lastName: {
        type: String,
        required: true,
        lowercase: true
    },
    firstName: {
        type: String,
        required: true,
        lowercase: true
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
        // maxlength: 50,
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
        type: Schema.ObjectId, 
        ref:'Order'
    }]
})

module.exports = mongoose.model('User', userSchema);
