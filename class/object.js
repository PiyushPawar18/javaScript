//object :- key:values
//different way of object creation
//1.object literals
// let obj={
//     fname:"piyush",
//     lname:"pawar",
//     age:21,
//     marks:90.34
// }
// console.log(obj);
// //2.new keyword 
// let obj_new = new Object
// obj_new.name="piyu"
// console.log(obj_new);
// //3.using class constructor
// class Person{
//     constructor(name,age,gender){
//         this.name=name;
//         this.age=age;
//         this.gender=gender
//     }
// }
// let per1=new Person("Amey",21,"Other")
// console.log(per1);
// console.log(typeof per1);  //object


//accessing values using keys
// let obj={
//     fname:"piyush",
//     lname:"pawar",
//     age:21,
//     marks:90.34,
//     hobbiess:["cricket","chess","video games","drawing"],
//     address:{
//         state:"maharastra",
//         city:"mumbai",
//         landmark:"sewri",
//         road:"TJ road",
//         pincode:400015
//     }
// }
// //using dot 
// console.log(obj.fname);  //piyush
// console.log(obj.address.state);  //maharastra
// //using [""]
// console.log(obj["lname"]); //pawar
// console.log(obj["hobbiess"]); //[ 'cricket', 'chess', 'video games', 'drawing' ]


//Add,Update & remove 
// const obj={
//     name:"piyush",
//     age:21
// }
// //console.log(obj); //{ name: 'piyush', age: 21}

// obj.gender="Male" //adding gender key and Male values in obj object
// console.log(obj); //{ name: 'piyush', age: 21, gender: 'Male' }

// obj.age=22; //updating age values :=  22
// console.log(obj);  //{ name: 'piyush', age: 22, gender: 'Male' }

// delete obj.age;
// console.log(obj); //{ name: 'piyush', gender: 'Male' }

//Object Methods
// const obj={
//     name:"piyush",
//     age:21
// }
// // object methods show output in form of array 
// console.log(Object.keys(obj)); //object keys show //[ 'name', 'age' ]
// console.log(Object.values(obj)); //object values show //[ 'piyush', 21 ]
// console.log(Object.entries(obj)); //object keys and values shows[ [ 'name', 'piyush' ], [ 'age', 21 ] ]

//concatination 
// let obj1={a:1 , b:2};
// let obj2={c:3 , d:4};

// 1.Object.assign(target , Source....)
// console.log(Object.assign(obj1,obj2));// { a: 1, b: 2, c: 3, d: 4 }
// console.log(obj2); //{ c: 3, d: 4 }
// console.log(obj1); // { a: 1, b: 2, c: 3, d: 4 }
// // obj1 affect hoga obj2 ki key values add hoga
// let obj=Object.assign({},obj1,obj2) //now we use empty obj to store obj1 and obj2 combinely
// console.log(obj); // { a: 1, b: 2, c: 3, d: 4 } 

// // 2.spread (...) for obj={...} for arr=[...] //doesn't affect tha original one
// //in object
// let obj1={a:1 , b:2};
// obj2={...obj1}
// console.log(obj2);

// // in array
// let arr1=[1,2,3,4,5,6];
// let arr2=[...arr1];
// arr2.push(34);
// console.log(arr1); //[ 1, 2, 3, 4, 5, 6 ]
// console.log(arr2); //[ 1, 2, 3, 4, 5, 6 ,34 ]


//tip:= object keys store in memeory in form of  string 


//Object destruction
// let {} = Object_name
let obj={
    name:"piyush",
    age:20,
    address:{
        pincode:400015,
        place:"mumbai"
    }
}

//Object Destruction is use for accessing purpose
// const {name,age} =obj
// console.log(name,age); //piyush 20
const {name,address:{place}} = obj
console.log(name,place); //piyush mumbai

//passing object as parameter in function
let values={
    one:1,
    two:2,
    three:3
}
let sum=function ({one,two}) { 
    return one+two
 }
let ans=sum(values)
console.log(ans);
