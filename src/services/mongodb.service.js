const mongoose = require('mongoose');
const config = require('../configs/db.config');

exports.connectDB = () =>{
    let url = config.mongo.url;
    mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Successfully connect to database");
    })
    .catch ((err) => {
        console.log('Could not connect to database', err);
    });
    
};
