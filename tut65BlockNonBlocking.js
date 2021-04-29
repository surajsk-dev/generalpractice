// blocking/synchronous execution- blocking is a synchronous execution
// its line by line execution
// it executes next line only after executing previous line

// Non-blocking/ Asynchronous execution- Non-blocking is a Asynchronous execution
// line by line execution is not gauranteed
// it will not wait for execution of function or first line of code and will execute next line
// it has a callback function

// example Non-blocking/ Asynchronous execution

const fs=require('fs');
 fs.readFile('sampleText.txt','utf-8',(err,data)=>{
    //  executes anytime
console.log(err,data);
});
// first this executes
console.log("this is last line");