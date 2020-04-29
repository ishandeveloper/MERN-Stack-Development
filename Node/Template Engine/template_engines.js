const express=require('express');
var app=express();

// Setting Templaet Engine
app.set('view engine','ejs');

app.listen(3000);

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'\\index.html');
});

app.get('/404',(req,res)=>{
    res.sendFile(__dirname+'\\404.html');
});

app.get('/profile/:name',(req,res)=>{
    var data={age:19, job:'Developer'};
    res.render('profile',{person:req.params.name, data:data});
});
