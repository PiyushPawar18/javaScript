//object = collection of key-values pair
//key =  always a String or Symbol
//value = any data types (primitive , non-primitive )

//declaration
// //Object literals
// let obj={
//     name:"piyush",
//     lname:"pawar",
//     age:22,
//     hobbies:["drawing","singing","cricket","chess"]
// }
// console.log(obj);
// //new Object 
// let newobj=new Object;
// newobj.name="Amey";
// newobj.age=22;
// console.log(newobj);
// //constructor 
// function add(a,b){
//     console.log(a,b);
// }
// let con_obj=new add(2,3);
// console.log(typeof con_obj);

//Access Properties  -> 2Type
let obj={
    name:"piyush",
    "last name":"pawar",
    "value":12,
    hobbies:["drawing","singing","cricket","chess"]
}
// // 1.Dot Notation
// console.log(obj.name);  //piyush
// console.log(obj."last name"); //error 
// // 2.Brakets Notation (is use when key is dynamic "" or has space)
// console.log(obj["name"]);  //piyush
// console.log(obj["last name"]);  //pawar

//Add/Update/Delete
// obj.age=22;    //add obj_name.new_key=new_key_value
// console.log(obj);
// obj.age=23;    //update obj_name.key_name=update_value
// console.log(obj);
// delete obj.age;    //delete delete(keyword)  obj_name.key_value (we wont to delete)
// console.log(obj);

//freeze /seal
// 1.freeze -> after we declare a freeze to object we cannot add/remove or update a value
// obj.age=22; //add 
// Object.freeze(obj);
// obj.age=23;  //update (not working)
// obj.new_key="new_key_value";  //add (not working)
// console.log(obj);
//2.seal -> after we declare a seal to object we cannot add/remove but we update/modify a value
// obj.age=22; //add 
// Object.seal(obj);
// obj.age=23;  //update/modify (working)  
// obj.new_key="new_key_value";  //add (not working)
// console.log(obj);


// symbol data type in object 
//Symbol declaration
// let mySym=Symbol(34);
// let mySym_str=Symbol("string");
// console.log(mySym); //Symbol(34)
//object implimantation 
// let myObj={
//     name:"piyu",
//     age:12,
//     //mySym:345  //typeof number 
//     [mySym]:345 ,  //[] use for symbol dt declaration
//     [mySym_str]:Symbol("string"),
//     newstr:Symbol("hello")
// }
// console.log(myObj);
// console.log(myObj[mySym]);  //345 
// console.log(typeof myObj[mySym]);  //number
// console.log(myObj[mySym_str]);  //Symbol(string)
// console.log(typeof myObj[mySym_str]);  //symbol
// console.log(myObj.newstr);  //Symbol(string)
// console.log(typeof myObj.newstr);  //Symbol
// //[Symbol(34)]: 345,
// //[Symbol(string)]: Symbol(string) 
// //newstr: Symbol(hello) 

//function add in object
// obj.newfuc = function(){
//     console.log("hello Js ");
// }
// // console.log(obj.newfuc);  //[Function (anonymous)]
// console.log(obj.newfuc());
// obj.newfuc2 =  function(){
//     console.log(`hello Js user, my name is ${obj.name} 
//         My hobbies is ${this.hobbies}`);
// }
// console.log(obj.newfuc2());
// console.log(obj);
// obj.newfun3 = function fun(){
//     console.log("i am function 3");
// }
// console.log(obj.newfun3);
// console.log(obj.newfun3());
// console.log(obj);