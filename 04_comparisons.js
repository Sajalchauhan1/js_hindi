// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);


// console.log("2" > 1);//comparison of two different data types, here 02,2 converts into number
// console.log("02" > 1)


// console.log(null>0); //false
// console.log(null==0); //false
// console.log(null>=0) //true


//the reason is that equality check == and comparisons > < >= <= work differently.
// comparison convert null to a number, treating it as a 0.
//that's why (3)null>=0 is true and 1

// console.log(undefined==0); //false
// console.log(undefined<0); //false
// console.log(undefined>0);  //false

// === also check the data type, here conersion automatically does not take place.

//for ex

console.log("2"=== 2); //false
console.log(2=== 2); //true (same data type)
console.log(3=== 2); //false (same data type but value is not same.)
