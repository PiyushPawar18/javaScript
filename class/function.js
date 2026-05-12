// let myArr=[1,2,3,4,5]
// let newArr=[];
// // console.log(myArr);

// //push (add element in end)
// function push(value){
//     myArr[myArr.length]=value;
// }
// // push(6);

// //pop (remove element in end)
// function pop(){
//     for(let i=0;i<myArr.length-1;i++){
//         newArr[i]=myArr[i];
//     }
//     myArr=newArr;
// }
// // pop();

// // unshift (add element at position start)
// function unshift(value){
//     for(let i=0;i<myArr.length;i++){
//         newArr[i+1]=myArr[i];
//     }
//     newArr[0] = value;
//     myArr = newArr;
// }
// // unshift(0)

// // shift (remove element at position start)
// function shift(){
//     for(let i=0;i<myArr.length-1;i++){
//         newArr[i]=myArr[i+1];
//     }
//     myArr=newArr;
// }
// // shift();
// // console.log(myArr);


// //flat
// let arr=[1,2,[3,4,[[5]]],6,7];
// console.log(arr); //[ 1, 2, [ 3, 4, [ [Array] ] ], 6, 7 ]
// //array -> string
// let str_arr=arr.toString();  
// console.log(str_arr);  //1,2,3,4,5,6,7
// console.log(str_arr.length);  //13
// //string -> array
// let real_arr = str_arr.split(",");
// console.log(real_arr); //[ '1', '2', '3', '4', '5', '6', '7 ]

// let new_arr=[];
// function flat(){
//     for(let i=0;i<real_arr.length;i++){
//         new_arr[i]=Number(real_arr[i]);
//     }
// }
// flat();
// console.log(new_arr); //[ 1, 2, 3, 4, 5, 6,  ]

//****************************************************************** */
// function a(){}
// console.log(typeof a);  //function //a is function ref 
// console.log(typeof a()); //no return then //undefined
// let b=function (){ return "str"}
// console.log(typeof b); //function
// console.log(typeof b()) //it return string "" //string

//********** */
// console.log(typeof function(){return []} ()); //object
// console.log(typeof function(){return {}} ()); //object
// console.log(typeof function(){return null} ()); //object
// console.log(typeof function(){return NaN} ()); //number

//********************************************** */
// function fn(){
//     console.log("hi");
// }
// let temp=fn(); //hi
// console.log(temp); //undefined

// function xyz(){
//     console.log("Hello")
// }
// let value=new xyz();
// console.log(value); //xyz{}

// function abc(name){
//     // const obj={};
//     // obj.name=name
//     this.name=name;
// }
// let result=new abc("piyush");
// console.log(result) //abc { name: 'piyush' }

// //without using new
// function Person(name) {
//   this.name = name;
//   console.log(this.name)
// }

// let p1 = Person("Piyush"); // ❌ no 'new'
// console.log(p1);  // undefined
// // // // //console.log(window.name); // "Piyush" (in browser)

//expalin with return
function User(name) {
  this.name = name;
  return { custom: "object" };  // manually returning object
}

let u1 = new User("Piyush");
console.log(u1);


//we want to call function immediately and
//golbal scope ke polution se problem hoti hai kai bar to hata ne keliye ham use karte hai 
// IIFE (Immidiately invoke function Expression)
(function () {
  console.log("Worked")
})(); //semicolon is compalsary to execute aother IIFE also
((name) => {
  console.log("Worked",name)
})("piyu");
//funtions declaration //function call
// ()()
