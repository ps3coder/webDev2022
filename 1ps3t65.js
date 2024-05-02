// synchronus code or blocking code
// line byline exection
// asynchronus or non blocking
// not gaurenteed line by line
// callback will be fire

const fs =  require("fs");
let text = fs.readFile("dele.txt","utf-8",(a,b)=>{
    console.log(a,b);
});
console.log("This is a message ")