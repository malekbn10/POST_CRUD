const express =require('express');
const app = express();
const postRoute= require('./routes/post')
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://user:kq03gvKEj003h1tI@malek.vxdxaom.mongodb.net/?retryWrites=true&w=majority&appName=malek");


app.use(express.json());

app.use('/Posts',postRoute);

app.listen(3000,()=>{
    console.log("Work !");
})