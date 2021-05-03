// import express
const express = require('express');

// creating express app
const app = express();

// port
const port = 80;

// routing use app.get

// homepage
app.get('/',(req,res)=>{
    res.status(200).send("This is home page of fisrt express app");
});

// about page
app.get('/about',(req,res)=>{
    res.send("This is about page of first express app");
});

// post method
app.post('/about',(req,res)=>{
    res.send("This is post method about page of first express app");
});

// listen to port server
app.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
});


