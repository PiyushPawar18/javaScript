// // console.log(window); // window is not defined
// // console.log(global); //Object [global]
// // console.log(globalThis); //Object [global]
// // console.log(this); {} //js wrap all code in module exports function and this is inclue in {} object (module.exports)

// function abc(){
//     console.log(this);  //function has own this rules now(this == object)
// }
// abc(); //Object [global]

// "use strict"
// function pqr(){
//     console.log(this);
// }
// pqr(); //Object [global]

// function xyz(){
//     "use strict";
//     console.log(this); //in strict case this == undefined
// }
// xyz();  //undefined


// const person = {
//     name: "Bhushan",
//     greet: function() {
//         console.log(this.name);  // Outputs: "Bhushan"
//     }
// };
// person.greet();

// const sayHello = () => {
//     console.log(this);  // Global object (e.g., window in browsers)
// };
// sayHello(); //{}

// const student = {
//     name: "Bhushan",
//     greet: () => {
//         console.log(this.name);  // Undefined (this is global, not person)
//     }
// };
// student.greet(); //undefined

// const person2 = {
//     name: "Bhushan",
//     greet: function() {
//         const sayHi = () => {
//             console.log(this.name);  // Outputs: "Bhushan"
//         };
//         sayHi();
//     }
// };
// person2.greet();

function test(){
    console.log(this);
}
// test(); // Object [global]

"use strict";
function demo(){
    
    console.log(this);
}
demo(); //Object [global]