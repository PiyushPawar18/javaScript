// const user = {
//     name:"piyush",
//     id:123,
//     age:22,
//     address:{
//         city:"mumbai",
//         state:"maharastra"
//     }
// }

// Object.defineProperty(user, "id", {
//     writable:false,
//     configurable:false
// })
// user.id="324";
// console.log(user.id)

// delete user.id;
// console.log(user.id)
// console.log(user)

// console.log(Object.getOwnPropertyDescriptors(user));

// /* // Object.defineProperties(user, {
// //   age: { value: 32 },
// //   name: { value: "Raj" }
// // }); */


// function foo(a,...rest,c){
//     console.log(a,rest,c);
// }
// foo(1,2,3,4,5,6); //SyntaxError: Rest parameter must be last formal parameter
