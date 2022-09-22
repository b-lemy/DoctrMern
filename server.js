const express = require('express');
const app = express();
require('dotenv').config()

const dbConfig = require("./config/dbConfig");



app.use(express.json());
const userRoute = require('./routes/userRoute');
app.use('/api/user',userRoute);

const port = process.env.port || 5000;
app.listen(port,()=>console.log(`Listening on stated at  ${port}`));