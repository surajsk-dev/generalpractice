// import express
const express=require('express');

// create express app
const app=express();

// path
const path=require('path')

// port no
const port=80;

// using static
app.use('/static',express.static('static'));

// setting pug
app.set('view engine','pug');
// set view and directory
app.set('views',path.join(__dirname,'views'));

// pug page render
app.get('/demo',(req,res)=>{
    res.render('demo', { title: 'Hey suraj', message: 'This is pug!' })
});

// routing
app.get("/",(req,res)=>{
    res.status(200).send('This is home page of express app');
});

// listen to port
app.listen(port,()=>{
    console.log(`server is listening at port ${port}`)
})