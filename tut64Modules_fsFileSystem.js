// adding module
const fs = require('fs');

// reading file
let text=fs.readFileSync('sampleText.txt','utf-8');


// printing
console.log(text);

// editing
text=text.replace("virus","covid");

// writing change to new file
fs.writeFileSync("sampleChange.txt",text);

// printing
console.log(text);


