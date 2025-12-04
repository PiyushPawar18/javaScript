let obj={
    fname:"piyush",
    lname:"pawar",
    age:21,
    marks:90.34,
    hobbiess:["cricket","chess","video games","drawing"],
    address:{
        state:"maharastra",
        city:"mumbai",
        landmark:"sewri",
        road:"TJ road",
        pincode:400015
    }
}
//shallow copy = create a new object and only copy a ref of nested original object istead of cloning them
// let obj_copy=obj;
// obj_copy.age=22;
// console.log(obj);  // age =22 (actual obj ko change karta hai )

//using spread Operator 
// let obj_copy={...obj}
// obj_copy.age=22;
// console.log(obj);  //age=21 (not change)
// obj_copy.address.city="pune"
// console.log(obj);  //city="pune" (change hoga kivki vo nested mai hai [original mai])
// console.log(obj_copy);


//Deep copy = create a new object that copies original object data 
//using structuredClone(obj)
let obj_copy=structuredClone(obj)
obj_copy.fname="Amey"
console.log(obj_copy);

//using JSON 
let str=JSON.stringify(obj)  //object to string 
console.log(str);
let obj_duplicate=JSON.parse(str);
console.log(obj_duplicate);
