// import express
const express=require('express');
// creating express app
const app=express();
// import path for pug
const path=require('path');

// port number
const port=80;

// using static 
app.use('/static',express.static('static'));
// set  path
app.set('views',path.join(__dirname,'views'));

// setting pug engine
app.set('view engine','pug');



// routing pug
app.get('/',(req,res)=>{
    const con='this is best content'
    const params={'title':'Gym Website','content':con}
    res.status(200).render('index.pug',params);
})


// start server
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
})