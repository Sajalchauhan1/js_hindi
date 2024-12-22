let score="77abc"

console.log(typeof score)
console.log(typeof (score))
//both are same

let valueInNumber =Number(score) //conversion of above string data type in number data type
console.log(valueInNumber)// it will show (NaN) NOT A NUMBER DATA TYPE becaue from above as it is not a pure no. so the data type which is shown will NaN



//"33"=> 33 easily conversted
//"3abc" Nan but the type is number whi is strange
//true=> 1 ; where as false=> 0


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn); // Conversion of number to boolean
console.log(booleanIsLoggedIn);


// when converted to boolean
//1=> true 0=> false
// "sajal"=> true 
//"" =>false
