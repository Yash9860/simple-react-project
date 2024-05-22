const express = require('express');

const dotenv = require('dotenv').config()
const cors = require('cors');
const { mongoose } = require('mongoose')


//database connection
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('conected to database'))
.catch((err)=> console.log("not conneted",err))

const app = express();


app.use('/', require('./router/authRoutes'))

const port = 8000;
app.listen(port,()=> console.log(`server is running on port ${port}`))