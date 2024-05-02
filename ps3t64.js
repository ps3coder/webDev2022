

//module is use to add some effct in application 
//buit in module



const fs = require("fs");
const text = fs.readFileSync("ps3nulltext.txt","utf-8");

text = text.replace("is","pankaj");


console.log("the content of the file is .......")
console.log(text);


console.log("creating a new file...");
fs.writeFileSync("pankaj.txt",text);