//string way to declared
// 1." "
// 2.''
// 3.``  //template literals 

// let str="js means JavaScript "
// let fname="piyush";
// let lname="pawar";

// //length
// console.log(fname.length);    //6

// //postion
// console.log(fname[3]);   //u
// console.log(fname.charAt(0));  //p
// console.log(fname.at(3));    //u
// console.log(fname.indexOf('y')); //2  //check value not a position
// fname="piyush pawar"
// console.log(fname.lastIndexOf('p')); //7

// //concatination
// let name="hi my name is ".concat(fname.concat(" " ,lname));
// console.log(`hi my name is ${fname} ${lname}`);
// console.log(name);

// //upper and lower case
// console.log(fname.toUpperCase());
// console.log(fname.toLowerCase());

// // //trim
// str=" js means JavaScript " ;
// console.log(str.length);
// console.log(str.trim.length);
// console.log(str.trim);

// //slice
// str="js means JavaScript" ;
// console.log(str.slice(0,3));  //slice(start,end-1)  //js
// console.log(str.slice(-10,));  //JavaScript //negative value allow
// console.log(str.substring(-8,)); //negative treated as 0 so 0-all //js means JavaScript

// //replace
// str="js means JavaScript" ;
// let replace=str.replace("means","=");   //one first value for all value use replaceAll
// console.log(replace);

// //split  conver -> string -> array
// str="js , means , JavaScript" ;
// let split=str.split(",");
// console.log(split);

// //includes
// str="js means JavaScript" ;
// console.log(str.includes("means"));  //true
// console.log(str.includes("Means"));  //false


// //array->string
// let arr=[1,2,[3,4,[[5]]],6,7];
// console.log(arr.flat(Infinity)); //[ 1, 2, 3, 4, 5, 6, 7]
// console.log(arr.toString().length);  //13
// console.log(arr.toString()); //1,2,3,4,5,6,7
// console.log(String(arr)); //1,2,3,4,5,6,7
// let new_arr=arr.toString()
// console.log(arr.join(","));  //1,2,3,4,5,6,7
// //string->array
// console.log(new_arr.split(",")) //[ '1', '2', '3', '4', '5', '6', '7']
// console.log(new_arr.split("4")) //[ '1,2,3,', ',5,6,7' ]
// console.log(Array.from(new_arr)); // [ '1', ',', '2', ',', '3', ',', '4', ',', '5', ',', '6', ',', '7 ]
