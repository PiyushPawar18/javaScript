// const obj = new Object() //singletoun object means this created from constructor
// // const obj2 = {}   //non singletoun object 

//               object {object}
// obj.name="piyush";
// obj.age=22;
// obj.isLoggedIn=false;
// obj.userfullname={
//     fname:"piyu",
//     lname:"pawar"
// }
// console.log(obj.userfullname.fname)  //piyu
// // console.log(obj);

//            Object.assign()
// const obj1={1:'a',2:'b'}
// const obj2={3:'c',4:'d'}
// // const obj3={obj1 ,obj2}
// //         Object.assign(target,source) means source target me merge hoga
// const obj3=Object.assign(obj1,obj2);
// console.log(obj3) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj1); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// const obj4=Object.assign({},obj1,obj2) //now target is {} empty object source (obj1,obj2) merge to {}
// console.log(obj4);
// const ojb5={...obj1,...obj2}
// console.log(ojb5)




// Key and value access
let demoObj={
    name:"piyush",
    age:12,
    arr:[1,2,3,4,5],
    obj:{
        1:1,
        2:2
    }
}
// console.log(demoObj);
// //convert obj to arr and get a key / values 
// console.log(Object.keys(demoObj));  //key acces   //[ 'name', 'age' ]
// console.log(Object.values(demoObj));  //values acces //[ 'piyush', 12 ]
// console.log(Object.entries(demoObj));

//check obj has a perticular value or not
console.log(demoObj.hasOwnProperty('obj'));  //true 