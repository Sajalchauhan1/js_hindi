// two data type  according to memory storage and accessing the memory
// 1. primitive data type   2. non-primitie data type

// #primitive   (call by value)
// 7 types: string,number,boolean,null,undefined,symbol,bigInt

//symbol
const id= Symbol('123');
const anotherid= Symbol('123');   // value is same #'123' but it gives false on console because we are using symbol and it makes the both id unique here.
console.log(id===anotherid);


// referece type (non-primitive)
// types: array, objects, functions

const heros =["shaktimaan", "batman" , "superman"]  //array example
let myobj{
    name: sajal,    //object
    Age: 20, 
}

const myFunction=function(){
    console.log("hello sajal");   //function
}

// undefined=> undefined
// null=> Object
// boolean=> boolean
//symbol=>symbol
// number=> number
// string=>string
// function=> function  //we call it object function
// object=>object     //have many more data type we'll study further.

//all non primitive gives object as data type.


//...........................................................................................

//stack and heap


