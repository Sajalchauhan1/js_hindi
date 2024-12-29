const name="sajal";
const repocount="50";

//console.log(name + repocount + "value")    //concatination  adding strings   old way of writing strings syntax


//modern way to writing syntax in javascript and more readable way.
//console.log(`hello my name is ${name} and my repo count is ${repocount}`);


//another way of declaring a string
const gameName= new String('sajal-ch')   //shows length and index of string also.

//console.log (gameName[0]);
//console.log (gameName.__proto__); //__proto__ here we use functions/methods/properties in string like below

//console.log(gameName.toUpperCase());  
//console.log(gameName.length);
console.log(gameName.charAt(4));
console.log(gameName.indexOf("a"));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));




