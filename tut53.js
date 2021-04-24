console.log("working with function");

// we have 4 names
let name1="Harry";
let name2="Suraj";
let name3="Sagar";
let name4="Rohan";

// console above names traditional way no function
console.log(name1+" is a good boy");
console.log(name2+" is a good boy");
console.log(name3+" is a good boy");
console.log(name4+" is a good boy");
// but this is not feasible way instead create function and paas names as values

// craeting function
// function greet(name) {
//     console.log(name+" is a good boy");  
// }

// // calling function with passing values
// greet(name1);
// greet(name2);
// greet(name3);
// greet(name4);

// creating function with two argument 
// function greet(name,greetText) {
//     console.log(greetText+" "+name);
//     console.log(name+" is a good boy");  
// }

// greetText="Good Morning"
// // calling function with passing values
// greet(name1,greetText);
// greet(name2,greetText);
// greet(name3,greetText);
// greet(name4,greetText);

//// creating function with default value argument
function greet(name,greetText="this is default greeting") {
    console.log(greetText+" "+name);
    console.log(name+" is a good boy");  
}

greetText="Good Morning"
// calling function with passing values
greet(name1,greetText);
greet(name2,greetText);
greet(name3,greetText);
//passing only name
greet(name4);
// here we can see that default argument is executed only when we dont pass argument


// function with return value
// function has input and output
// it take a,b,c as input
function sum(a,b,c){
    d=a+b+c;
    return d;
}
//  it returns d as output
let returnVal=sum(1,2,3);
console.log(returnVal)

// min function with two argument
function min(a,b){
    if(a<b){
        console.log(a+" is minimum value")
    }
    else{
        console.log(b+" is minimum val")
    }
}
// calling function with passing val
min(5,2);


// max function with two argument
function max(a,b){
    if(a>b){
        console.log(a+" is max value")
    }
    else{
        console.log(b+" is max val")
    }
}
// calling function with passing val
max(8,42);