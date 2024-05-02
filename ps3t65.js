// synchrounus or blocking
// line by line execution
// asynchrounus or non blocking
// not guarenteed for line by line execution



const fs = require("fs");
let text = fs.readFile("ps3nulltext.txt","utf-8", (err, data)=>{
    console.log(err, data);
});

console.log("This is a massage")
