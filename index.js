const express = require("express");
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const productRoute = require('./routes/product')
const app = express();
const port = process.env.PORT || 5500;

app.use(morgan("common"));
app.use(helmet());
app.use(express.json())
dotenv.config();

// mongoDB connect 
mongoose.set('strictQuery', true);
mongoose.connect(process.env.mongoDB);

app.get('/', (req,res)=>{
    res.send('Welcome to Adviser server');
})


// product route connect
app.use('/api/product', productRoute);

app.listen( port, ()=>{
    console.log('Advisor server is running at', port);
})