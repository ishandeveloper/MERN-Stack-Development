const express=require('express');
var app=express();

app.listen(3000);

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'\\index.html');
});

app.get('/404',(req,res)=>{
    res.sendFile(__dirname+'\\404.html');
});

app.get('/profile/:id',(req,res)=>{
    res.send('You have requested to access profile page for the id : '+req.params.id)
});
