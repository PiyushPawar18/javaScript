//In Js Number :- int ,float ,decimal
// let number=400; //Number literals
// console.log(number);
// console.log(typeof number); //number

// let n=Number(40); //Number constructor (primitive)
// const num=new Number(100);  //non-primitive
// console.log(num);
// console.log(typeof num); //object

//number Methods 
let int=12;
let float=12.4
// //1.toString() convert no to string 
// console.log(int.toString().length); //2
// console.log(float.toString().length); //4
// //2.toFixed(digit) //rounds no to decimal place(how many digit are shown after dot)
// float = 12.452;
// console.log(float.toFixed(2));  //12.45
// float = 12.456;
// console.log(float.toFixed(2));  //12.46
// console.log(float.toFixed(0)); //12
//3.toPrecision(digit)  //Formats number with total significant digits.
// float = 12.456;
// console.log(float.toPrecision(3)); //12.5
// float = 12.446;
// console.log(float.toPrecision(3)); //12.4 //jitana digit chahiye utana milega =(3)
//4.toExponential(digit)  //convert no into exponential(scientific notation)
                        //You can specify how many digits should appear after the decimal point
// float = 12.456;
// console.log(float.toExponential()); //1.2456e+1
// console.log(float.toExponential(2)); //1.25e+1
// //Result is always in form : digit.digit e+- exponent

//5.check values (boolean output)
//A.Number.isNaN(x)
// let str="piyu";
// console.log(Number.isNaN(str)); //flase
// //Number(str) //Nan
// console.log(Number.isNaN(Number(str)));//true
// console.log(Number.isNaN(NaN)); //true


//imp:= all number object Methods return a string because they are meant for formating numbers for output 
// console.log(typeof float.toExponential());  //string






