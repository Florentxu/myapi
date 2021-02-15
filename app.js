
const app = require('./src/services/express.services');
const mongoose = require('./src/services/mongodb.services');
mongoose.connectDB();
app.start();


// const express = require('express');
// const fs = require('fs');
// const app = express();
// const port = 3000;

// const users = require('./mockup/users.json');

// app.get('/', (req,res)=> {
//     res.send('Hello world');
// });

// app.listen(port,() => {
//     console.log(`app is running on port ${port}`);
// });


// //dossier mockup -> users.json (avec 3 users)
// // email, firstname, lastname, 
// // /users accessible en get

// app.get('/users',(req,res)=> {
//     res.send(users);
// });