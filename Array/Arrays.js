//                  Arrays 
//Array is special kind of Object is JS 
//Array store multiple values with different datatypes in one variable
//Array size is resizable
//index start from 0

//                  Array declaration
// const myArr=[0,1,2,3,4];
// console.log(myArr);

//                   index access
// console.log(myArr[1]); //1
// console.log(myArr[4]); //4
// console.log(myArr[5]); //undefined
// console.log(myArr["3"]); //3
// console.log(myArr["one"]); //undefined (Array index accessed only integers values)
// console.log(myArr[-1]);  //undefined

//                   length properties
// let number=[1,2,3,4,5,6]
// console.log(number.length); //6

// number[6]=7;
// console.log(number);
// console.log(number.length); //7
// number[8]=9;
// console.log(number); //[ 1, 2, 3, 4, 5, 6, 7, <1 empty item>, 9 ]
// console.log(number.length); //9
// console.log(number[7]); //undefined

//                    Array methods

// 1.Adding/Removing
// let myArr=[1,2,3,4,5];
// console.log(myArr);
// myArr.push(6); //add end
// myArr.pop(); //remove end
// myArr.unshift(0); //add start
// myArr.shift(); //remove start
// splice(start,deleteCount,item1,item2...)
// myArr.splice(2,2); //remove   //from 2 index -> 2 items remove 
// myArr.splice(2,0,3,4); //adding  //from 2 index -> 0 remvoe -> 3,4 items add
// myArr.splice(2)  // start at index 2, delete everything after
// console.log(myArr);

// 2.Searching
// let myArr=[1,2,3,4,5];
// console.log(myArr.indexOf(1)); //1 ki index 0 hai
// console.log(myArr.indexOf()); //-1 no value give 
// console.log(myArr.includes(3)); //true
// console.log(myArr.includes(0)); //false
//find(fn) $ findIndex(fn)
// let val=myArr.find(num => num>4);
// console.log(val); //5 is greater than 4
// // Agar koi match nahi mila → undefined.
// val=myArr.findIndex(num => num>4);
// console.log(val);  // 4 (index of 5)

// 3.Conversion
// let myArr=[1,2,3,4];
// console.log(myArr);    //[ 1, 2, 3, 4 ] 
// convert Array to string
// let copyArr=myArr.join();    //join(",") convert Array -> string
// console.log(copyArr);  //1,2,3,4
// copyArr=myArr.toString();
// console.log(copyArr);  //1,2,3,4
// //concatination
// let myArr2=[5,6,7,8];
// console.log(myArr.concat(myArr2)); //[1, 2, 3, 4, 5, 6, 7, 8]
//spread 
// let newArray=[...myArr, ...myArr2];
// console.log(newArray);
//flat(depth) //nested array ko flat karta hai series mai 
// let nested_Array=[1,2,3,4,[5,6],7,[4,6,[7,8]]];
// let flat_array=nested_Array.flat(Infinity); //flat(depth) //flat(1)
// console.log(flat_array); //[1, 2, 3, 4, 5, 6, 7, 4, 6, 7, 8]



//img  (slice VS splice)
// //slice() = copy (no changes).
// let myArr=[1,2,3,4];
// console.log("A",myArr);
// let myn1=myArr.slice(1,3); //2,3 extract doesn't affect array
// console.log(myn1);  

// //splice() = Surgery ✂ (cut + insert at same place).
// console.log("B",myArr);
// let myn2=myArr.splice(1,3); //2, 3, 4 remove/extract affect array
// console.log(myn2);  
// console.log("C",myArr);

// 4.Array Utility Method
// let myArr=[1,2,3];
// //Array.isArray(arg) (check if arg is Array or not)
// console.log(Array.isArray(myArr));  //true
// console.log(Array.isArray("piyush"));  //false
// //Array.from() (convert Array like(string,nodelist) and iteration objects into real array)
// console.log(Array.from("piyush"));
// console.log(Array.from([1,2,3] , x => x*2)); //[2,4,6]
// //Array.of() (create a new Array)
// let num1=100, num2=200, num3=300;
// console.log(Array.of(num1,num2,num3)); //[ 100, 200, 300 ]
// console.log(Array.of(1,2,3,4,"Piyush")); //[ 1, 2, 3, 4, 'Piyush' ]


//array->string
let arr=[1,2,[3,4,[[5]]],6,7];
console.log(arr.flat(Infinity)); //[ 1, 2, 3, 4, 5, 6, 7]
console.log(arr.toString().length);  //13
console.log(arr.toString()); //1,2,3,4,5,6,7
console.log(String(arr)); //1,2,3,4,5,6,7
let new_arr=arr.toString()
console.log(arr.join(","));  //1,2,3,4,5,6,7
//string->array
console.log(new_arr.split(",")) //[ '1', '2', '3', '4', '5', '6', '7']
console.log(new_arr.split("4")) //[ '1,2,3,', ',5,6,7' ]
console.log(Array.from(new_arr)); // [ '1', ',', '2', ',', '3', ',', '4', ',', '5', ',', '6', ',', '7 ]
