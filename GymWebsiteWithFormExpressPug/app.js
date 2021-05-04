// import express
const express=require('express');

// import fs to store form data in file
const fs=require('fs');

// creating express app
const app=express();

// to get form data we have use encoded url.
app.use(express.urlencoded());

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


// sending form data to file
app.post('/',(req,res)=>{
    // get form data and console
    // data=req.body
    // console.log(req.body)

    // covert form data to string
    let name=req.body.name;
    let age=req.body.age;
    let gender=req.body.gender;
    let about=req.body.about;
    let address=req.body.address;
    outputData=`My name is ${name},${age} years old and ${gender},about me ${about}. My address is ${address} `
    fs.writeFileSync('dataFile.txt',outputData)
    const params={'title':'Gym Website'}
    res.status(200).render('index.pug',params);
})


// start server
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
})