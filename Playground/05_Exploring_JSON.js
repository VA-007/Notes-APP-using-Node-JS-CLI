const fs = require('fs');


let jsonData = fs.readFileSync('jsonData.json','utf-8');
console.log(jsonData);

let parsedData = JSON.parse(jsonData);
console.log(parsedData);

parsedData.name = 'Vishank';
parsedData.age = 19;
console.log(parsedData);

jsonData = JSON.stringify(parsedData);
fs.writeFileSync('jsonData.json',jsonData);

let check = fs.readFileSync('jsonData.json','utf-8');
console.log(check);



