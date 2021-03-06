const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Date and Time in JavaScript</title>
      <style>
          .container{
              background-color: antiquewhite;
              border: 2px solid black;
              text-align: center;
          }
          h2{
              color: blueviolet;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h3>Clock based on date() in JavaScript.</h3>
          <h2 id="time"></h2>
      </div>
      <script>
          // date() is object
          // creating date
          let now=new Date();
          // current date and time
          console.log(now);
  
          // reference of date and time
          // let rdt=new Date(0);
          // give reference of our date and time
          // console.log(rdt);
  
          // passing time in milliseconds
          // let rdt=new Date(1000);
          // gives date and time of reference with 1 second difference
          // console.log(rdt);
  
          // arguments in date()
          // Date(year,month,date,hours,minutes,milliseconds);
          let newDate=new Date(3020,4,6,9,3,2,34);
          console.log(newDate);
  
          // date functions
  
         let yr=newDate.getFullYear();
          console.log("The year is: ",yr);
          let date=newDate.getDate();
          console.log("The date is: ",date);
          let month=newDate.getMonth();
          console.log("The month is: ",month);
          let hours=newDate.getHours();
          console.log("The hours is: ",hours);
  
          // set functions
          newDate.setDate(5);
          console.log(newDate)
          // similartly we have setHours,setMonth,setMinutes etc
  
          // autocorrect in date
          newDate.setDate(34);
          // automatically adjust 34 to next date
          console.log(newDate)
  
          // timestamp reference in  milliseconds from reference date
          console.log(Date.now());
  
          // creating clock using date and setinterval
          // function
          function displayTime(){
              let currentTime=new Date();
              // get element
              let timeEl=document.getElementById('time');
              timeEl.innerHTML=currentTime;
          }
  
          // setInterval at 1 sec 
          setInterval(displayTime,1000);
          
  
  
      </script>
      
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});