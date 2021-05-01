// use when we have only one function in module
// import module 
// const average = require('./module');
//using function from module
// console.log(average([1,2,3]));

// multiple functions in module

const mod = require('./module');

console.log(mod.avg([1,2,3]));


console.log(mod.name);
console.log(mod.learning);