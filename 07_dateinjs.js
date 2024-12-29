let myDate= new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toTimeString());


console.log(typeof myDate);   // type of date=> object //interview question
// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());
let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); //for getting time in milli seconds.
//console.log(Math.floor(Date.now()/1000));  //for getting time in seconds and using no decimal point because we are using floor(math)//option.



newDate.toLocaleString('default', {
    weekday: "long",                   //customizing dates and day and time.
    
})


