// nodejs built in module
const fs = require("fs");
let text = fs.readFileSync("ps3.txt","utf-8");
text = text.replace("content","pankaj")
console.log("the content of file is ")
console.log(text);

console.log("creating a bnew file ........");
fs.writeFileSync("pankaj.txt",text);    