const express = require('express');
const app = express();
require('dotenv/config');
const publicRoutes = require('./api/routers/publicroutes');
const bodyparser = require('body-parser');
const cors = require('cors');
const { urlencoded } = require('body-parser');
const connection = require('./config/connection');
const port = process.env.PORT;
const connectport = require('./config/port');

// middleware
function middleware(){
app.use(bodyparser.json());
app.use(bodyparser , urlencoded({extended:true}));
app.use(cors());
app.use('*', cors());
app.use('/', publicRoutes);
connection;
connectport;

}
middleware();




