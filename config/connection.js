const mongoose = require('mongoose');
require('dotenv/config');

const URL = process.env.connection_string;

// create connnection

mongoose.connect(URL , {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((data) =>{
    console.log("your data base connected successfully");

}).catch((error) =>{
    console.log("connection failed" + error);
})

module.exports = mongoose;

