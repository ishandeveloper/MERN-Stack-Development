const express=require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/app',
    {
        useNewUrlParser: true,
        useUnifiedTopology:true,
        useCreateIndex:true
    }).then(()=>{
        console.log("DB CONNECTED");
    });

const app=express();
const port=8000;

app.listen(port,()=>{
    console.log(`app is running at ${port}`);
});