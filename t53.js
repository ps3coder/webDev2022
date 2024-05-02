console.log("this is tutorial 53");
function greet(names, greetText="Greeting from javaScript"){
    let name1 = "name1" //local scope
    console.log(greetText + "   " + names);
    console.log(names + "  is a good boy.");
}
function sum(a,b,c){

    let d = a + b + c;
    return d;


}

let names = "pankaj";
let name1 = "pankaj1 ";
let name2 = "pankaj2 ";
let name3 = "pankaj3 ";
let name4 = "pankaj4 ";
let greetText = "Good morning";

greet(names, greetText);
greet(name1, greetText);
greet(name2, greetText);
greet(name3, greetText);
greet(name4, greetText);
//let returnVal = greet(name3);
//console.log(returnVal)

let returnVal = sum(1,2,3);
console.log(returnVal)


//console.log(names + "is a good boy");
//console.log(name1 + "is a good boy");
//console.log(name2 + "is a good boy");
//console.log(name3 + "is a good boy");
//console.log(name4 + "is a good boy");