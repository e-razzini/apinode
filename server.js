require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const inscritoRoute = require('./routers/inscritos.js');
app.use("/inscritos",inscritoRoute);

mongoose.connect(process.env.DATABASE_STRING,{useNewUrlParser:true,useUnifiedTopology:true});
const db = mongoose.connection;
db.on("error",(err)=> console.log("error"));
db.once("open",() => console.log("conected success"));

app.use(express.json());



app.listen(3000,() => {console.log('start');})