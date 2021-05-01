console.log('This is module');
// function average takes array of numbers
function average(arr){
    let sum=0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

// have export module to use in other apps
// only one function
// module.exports=average;

// multiple exports
module.exports ={
    avg: average,
    name: "Suraj",
    learning:"NodeJs"
} 
    