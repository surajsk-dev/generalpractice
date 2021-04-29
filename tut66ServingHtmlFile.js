// import http module
const http=require('http');

// import fs module for file read
const fs=require('fs');

// reading file
const fileContent=fs.readFileSync('tut59DateAndTime.html','utf-8');

// creating server
const server=http.createServer((req,res)=>{
    // specifying response code and file type
    res.writeHead(200,{'Content-type':'text/html'});
    // giving file
    res.end(fileContent);
});

// listening server
// using port 80 because we dont need to specify it in url of browser
// 127.0.0.1 is host
server.listen(80,'127.0.0.1',()=>{
    console.log("listening port 80")
});
