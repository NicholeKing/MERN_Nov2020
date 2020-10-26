// JavaScript Fundamentals

// Declare a variable
//Python -> name = "Nichole"
//C# -> string name = "Nichole";
var name = "Nichole";
console.log(name);
var num = 4;
console.log(name + num);

//Create an array
var arr = [1,2,3,'four',true];
console.log(arr);

//Lots of quotation marks
var statement = 'Hello, there are "words" here';
console.log(statement);

//Object
var dojo = {
    instructor: ["Nichole", "Michael"],
    numberOfNinja: 45,
    stack: "MERN"
}
console.log(dojo);
console.log(dojo.instructor);

//var -> globally, available to all
//let, const -> available to some

//Let -> tends to show up in loops
for(let i = 0; i < 5; i++){
    console.log(i);
}
//This will break with let
//console.log(i);

//const -> constant 
const number = 6;
console.log(number);
//number = 7;
//console.log(number);

//const lets you change the FEATURES of an object, not the object itself though
const item = {
    product: "Computer",
    price: 1299.99
}
item.price = 1199.99;
item.product = "Laptop";
//This will break
//item = "seven";
console.log(item.product);
console.log(item.price);

var phone = "Samsung";

console.log(something());

function something(){
    var phone = "IPhone";
    return phone;
}

console.log(something());
console.log(phone);

//Hoisting
console.log(food);
var food = "Hamburger";

for(let i = 0; i < 5; i++){
    console.log(pudding);
    var pudding = "fruity pebbles";
}

var arr1 = [1,2,3,4,5,6];
var v1 = arr1[0];
var v2 = arr1[1];
var v3 = arr1[2];
var v4 = arr1[3];

var [v1,,,v2,v3] = arr1;
console.log(v1, v2, v3);

var person = {
    name: "Nichole",
    email: "n@k.com"
}

var {name: firstname, email} = person;
console.log(email);

//Spread
const [...othernums] = arr1;
console.log(othernums);

//Ternary
var something = false;
if(something == true){
    console.log("It's the truth!");
} else {
    console.log("It's a lie!");
}

if(something){
    console.log("Truth");
} else {
    console.log("False");
}

something ? console.log("Truth") : console.log("False");